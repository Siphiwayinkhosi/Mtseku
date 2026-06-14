import nodemailer from "nodemailer";

const DEFAULT_RECIPIENT = "Tony.Noyila@outlook.com";
const DEFAULT_CC = "siphiwayinkhosi.mahlalela9646@gmail.com";

const serviceOptions = new Set([
  "Shuttle Services",
  "Tours & Sightseeing",
  "Private Hire",
  "Contract Transport",
  "Airport Transfer",
  "Custom Solution",
]);

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  passengers: number;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  serviceType: string;
  message: string;
  company: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getString = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const parseBody = (body: unknown): Record<string, unknown> => {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }

  return body && typeof body === "object"
    ? (body as Record<string, unknown>)
    : {};
};

const validatePayload = (
  body: Record<string, unknown>,
): { data?: BookingPayload; error?: string } => {
  const passengers = Number(body.passengers);
  const data: BookingPayload = {
    name: getString(body.name, 100),
    email: getString(body.email, 254).toLowerCase(),
    phone: getString(body.phone, 40),
    passengers,
    pickupLocation: getString(body.pickupLocation, 180),
    destination: getString(body.destination, 180),
    date: getString(body.date, 10),
    time: getString(body.time, 5),
    serviceType: getString(body.serviceType, 80),
    message: getString(body.message, 1500),
    company: getString(body.company, 120),
  };

  if (data.company) {
    return { data };
  }

  if (
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.pickupLocation ||
    !data.destination ||
    !data.date ||
    !data.time ||
    !data.serviceType
  ) {
    return { error: "Please complete all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!/^[+\d][\d\s().-]{6,39}$/.test(data.phone)) {
    return { error: "Please enter a valid phone number." };
  }

  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 20) {
    return { error: "Passenger count must be between 1 and 20." };
  }

  const travelDate = new Date(`${data.date}T00:00:00Z`);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
    Number.isNaN(travelDate.getTime()) ||
    travelDate.toISOString().slice(0, 10) !== data.date ||
    travelDate < today
  ) {
    return { error: "Please enter a valid travel date." };
  }

  const [hours, minutes] = data.time.split(":").map(Number);
  if (
    !/^\d{2}:\d{2}$/.test(data.time) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return { error: "Please enter a valid travel time." };
  }

  if (!serviceOptions.has(data.serviceType)) {
    return { error: "Please select a valid service type." };
  }

  return { data };
};

const buildEmail = (booking: BookingPayload) => {
  const fields = [
    ["Name", booking.name],
    ["Email", booking.email],
    ["Phone", booking.phone],
    ["Passengers", String(booking.passengers)],
    ["Service", booking.serviceType],
    ["Travel date", booking.date],
    ["Preferred time", booking.time],
    ["Pickup", booking.pickupLocation],
    ["Destination", booking.destination],
    ["Additional requirements", booking.message || "None supplied"],
  ];

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:10px 14px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;color:#071426;">${escapeHtml(label)}</th>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#344257;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
        </tr>`,
    )
    .join("");

  return {
    subject: `New ${booking.serviceType} request from ${booking.name}`,
    text: [
      "A new transport request was submitted on the Mtseku website.",
      "",
      ...fields.map(([label, value]) => `${label}: ${value}`),
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#071426;">
        <h1 style="font-size:24px;margin-bottom:8px;">New transport request</h1>
        <p style="margin-top:0;color:#5b6677;">Submitted through the Mtseku Transport Services website.</p>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">
          <tbody>${htmlRows}</tbody>
        </table>
        <p style="font-size:13px;color:#6b7280;margin-top:20px;">Reply directly to this email to contact ${escapeHtml(booking.name)}.</p>
      </div>`,
  };
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response
      .status(405)
      .json({ error: "Only POST requests are accepted." });
  }

  const { data, error } = validatePayload(parseBody(request.body));

  if (error || !data) {
    return response.status(400).json({ error });
  }

  // Return a normal success response for bots that fill the hidden field.
  if (data.company) {
    return response.status(200).json({ ok: true });
  }

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!gmailUser || !gmailAppPassword) {
    console.error(
      "Booking email is missing GMAIL_USER or GMAIL_APP_PASSWORD.",
    );
    return response.status(503).json({
      error:
        "Email delivery is temporarily unavailable. Please use WhatsApp or call the team.",
    });
  }

  try {
    const email = buildEmail(data);
    const bookingRecipient =
      process.env.BOOKING_EMAIL_TO || DEFAULT_RECIPIENT;
    const copyRecipient = process.env.BOOKING_EMAIL_CC || DEFAULT_CC;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const from = {
      name: "Mtseku Website",
      address: gmailUser,
    };

    const delivery = await transporter.sendMail({
      from,
      to: bookingRecipient,
      cc:
        copyRecipient.toLowerCase() === gmailUser.toLowerCase()
          ? undefined
          : copyRecipient,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    const acceptedRecipients = delivery.accepted.map(String);
    const rejectedRecipients = delivery.rejected.map(String);
    const recipientAccepted = acceptedRecipients.some(
      (recipient) =>
        recipient.toLowerCase() === bookingRecipient.toLowerCase(),
    );

    console.info("Gmail booking delivery result", {
      messageId: delivery.messageId,
      accepted: acceptedRecipients,
      rejected: rejectedRecipients,
      response: delivery.response,
    });

    if (!recipientAccepted) {
      console.error("Gmail did not accept the booking recipient.", {
        bookingRecipient,
        accepted: acceptedRecipients,
        rejected: rejectedRecipients,
        response: delivery.response,
      });
      return response.status(502).json({
        error:
          "The booking email was not accepted for delivery. Please use WhatsApp or call the team.",
      });
    }

    if (copyRecipient.toLowerCase() === gmailUser.toLowerCase()) {
      console.warn(
        "BOOKING_EMAIL_CC matches GMAIL_USER; Gmail suppresses self-delivery. Use a different sender account to receive an Inbox copy.",
      );
    }

    return response.status(200).json({
      ok: true,
      reference: delivery.messageId,
      smtpResponse: delivery.response,
    });
  } catch (providerError) {
    console.error("Gmail booking delivery failed:", providerError);
    return response.status(502).json({
      error:
        "We could not send your request right now. Please try again or use WhatsApp.",
    });
  }
}
