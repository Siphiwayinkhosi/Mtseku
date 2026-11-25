import { DurableObject } from "cloudflare:workers";
import { z } from "zod";
import serviceOptions from "../src/lib/booking-services.json";
import { buildEmail } from "./booking-email.js";

const site = "https://www.mtsekutransport.co.za";
const mailbox = "info@mtsekutransport.co.za";
const sender = "notifications@bookings.mtsekutransport.co.za";
const duplicateWindow = 15 * 60 * 1000;
const maxBodyBytes = 16 * 1024;
const requestFailed = "Your request could not be sent. Please try again or contact us on WhatsApp.";

const singleLine = (limit) => z.string().trim().max(limit).refine((text) => !/[\r\n]/.test(text));
const submissionSchema = z.object({
  name: z.string().trim().min(1).max(100).refine((name) => !/[\r\n]/.test(name)),
  email: z.union([z.literal(""), z.string().trim().max(254).email()]).transform((email) => email.toLowerCase()),
  phone: singleLine(40),
  serviceType: z.enum(serviceOptions),
  pickupLocation: singleLine(240),
  dropoffLocation: singleLine(240),
  preferredDateTime: z.string().regex(/^(?:\d{4}-\d{2}-\d{2})?(?: ?(?:[01]\d|2[0-3]):[0-5]\d)?$/),
  passengers: z.string().regex(/^(?:[1-9]|1[0-9]|20)$/),
  message: z.string().trim().min(1).max(3000),
}).refine(({ email, phone }) => email || /\d/.test(phone));

const json = (body, status = 200) => Response.json(body, {
  status,
  headers: { "Cache-Control": "no-store" },
});
const failure = (status, message = requestFailed) => json({ success: false, message }, status);
const accepted = () => json({ success: true });

async function readBody(request) {
  if (!request.body) return null;
  const reader = request.body.getReader();
  let size = 0;
  const decoder = new TextDecoder();
  let text = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) return JSON.parse(text + decoder.decode());
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      text += decoder.decode(value, { stream: true });
    }
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

async function verifyChallenge(token, secret, ip) {
  if (typeof token !== "string" || !token || token.length > 2048) return false;
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token, ...(ip && { remoteip: ip }) }),
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error("Turnstile unavailable");
  const result = await response.json();
  return result.success === true && result.hostname === new URL(site).hostname && result.action === "booking";
}

export default {
  async fetch(request, env) {
    const enabled = Boolean(env.BOOKING_EMAIL && env.TURNSTILE_SECRET_KEY && env.TURNSTILE_SITE_KEY);
    if (request.method === "GET") {
      return json({ siteKey: enabled ? env.TURNSTILE_SITE_KEY : null });
    }
    if (request.method !== "POST") return failure(405, "Method not allowed.");
    if (request.headers.get("Origin") !== site) return failure(403);
    if (!enabled) return failure(503, "Online enquiries are temporarily unavailable. Please use WhatsApp or call Mtseku Transport Services.");
    if (request.headers.get("Content-Type")?.split(";", 1)[0]?.trim().toLowerCase() !== "application/json") {
      return failure(415);
    }
    try {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const { success } = await env.BOOKING_RATE_LIMIT.limit({ key: ip });
      if (!success) return failure(429, "Too many attempts. Please wait a minute and try again.");
      const body = await readBody(request);
      if (!body || body.honeypot !== "") return failure(400, "Please check the form and try again.");
      const parsed = submissionSchema.safeParse(body);
      if (!parsed.success) return failure(400, "Please check your contact details and required trip information.");
      if (!await verifyChallenge(body.turnstileToken, env.TURNSTILE_SECRET_KEY, ip === "unknown" ? "" : ip)) {
        return failure(403, "Please complete the verification and try again.");
      }
      const submission = JSON.stringify(parsed.data);
      const key = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(submission));
      return await env.BOOKING_DELIVERY.getByName(new Uint8Array(key).toHex()).fetch("https://booking.internal/", {
        method: "POST",
        body: submission,
      });
    } catch {
      return failure(503);
    }
  },
};

export class BookingDelivery extends DurableObject {
  async fetch(request) {
    const submission = await request.json();
    const previous = await this.ctx.storage.transaction(async (storage) => {
      const current = await storage.get("status");
      if (current) return current;
      await storage.setAlarm(Date.now() + duplicateWindow);
      await storage.put("status", "sending");
      return null;
    });
    if (previous === "accepted") return accepted();
    if (previous) return failure(409, "We couldn’t confirm this request. Please contact Mtseku on WhatsApp before trying again.");

    let messageId;
    try {
      ({ messageId } = await this.env.BOOKING_EMAIL.send({
        from: { name: "Mtseku Transport Services", email: sender },
        to: mailbox,
        replyTo: submission.email || undefined,
        ...buildEmail(submission),
      }));
    } catch (error) {
      // Keep the reservation if the service could have accepted the message.
      if (error instanceof TypeError || (error.code?.startsWith("E_") && error.code !== "E_INTERNAL_SERVER_ERROR")) {
        await this.ctx.storage.delete("status");
      }
      console.error("Booking email send failed", { code: error.code });
      return failure(502);
    }
    if (!messageId) return failure(502);
    await this.ctx.storage.put("status", "accepted");
    return accepted();
  }

  async alarm() {
    await this.ctx.storage.delete("status");
  }
}
