import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { BUSINESS, whatsappBookingUrl } from "@/lib/site";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL?.trim();

const serviceOptions = [
  "Shuttle Services",
  "Tours & Sightseeing",
  "Private Hire",
  "Contract Transport",
  "Airport Transfer",
  "Custom Solution",
] as const;

const bookingBenefits = [
  {
    icon: CheckCircle2,
    title: "Direct request",
    text: "Send the trip details the team needs to review your transport.",
  },
  {
    icon: CarFront,
    title: "Right-fit transport",
    text: "Vehicle and service planning based on the journey and passengers.",
  },
  {
    icon: ShieldCheck,
    title: "Insured service",
    text: "Passenger liability insurance supports responsible operations.",
  },
  {
    icon: UserRoundCheck,
    title: "Professional drivers",
    text: "Customer care, road safety and ethical conduct are prioritised.",
  },
] as const;

const getLocalDate = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().split("T")[0];
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const getFormValue = (formData: FormData, name: string) =>
  String(formData.get(name) || "").trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Booking = () => {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = getFormValue(formData, "name");
    const email = getFormValue(formData, "email").toLowerCase();
    const phone = getFormValue(formData, "phone");
    const serviceType = getFormValue(formData, "serviceType");
    const message = getFormValue(formData, "message");
    const company = getFormValue(formData, "company");

    if (company) {
      form.reset();
      setStatus("success");
      setStatusMessage(
        "Thank you. Your request has been received. Mtseku Transport Services will contact you shortly.",
      );
      return;
    }

    if (!name) {
      setStatus("error");
      setStatusMessage("Please enter your full name.");
      return;
    }

    if (!email && !phone) {
      setStatus("error");
      setStatusMessage("Please enter either an email address or phone number.");
      return;
    }

    if (email && !emailPattern.test(email)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!serviceType) {
      setStatus("error");
      setStatusMessage("Please select a service type.");
      return;
    }

    if (!message) {
      setStatus("error");
      setStatusMessage(
        "Please add a short message about your transport request.",
      );
      return;
    }

    if (!CONTACT_API_URL) {
      setStatus("error");
      setStatusMessage(
        "Online enquiries are temporarily unavailable. Please use WhatsApp or call Mtseku Transport Services.",
      );
      return;
    }

    const payload = {
      formType: "transport-enquiry",
      name,
      email,
      phone,
      serviceType,
      pickupLocation: getFormValue(formData, "pickupLocation"),
      dropoffLocation: getFormValue(formData, "dropoffLocation"),
      preferredDate: getFormValue(formData, "preferredDate"),
      preferredTime: getFormValue(formData, "preferredTime"),
      numberOfPassengers: Number(
        getFormValue(formData, "numberOfPassengers") || 1,
      ),
      message,
    };

    setStatus("submitting");
    setStatusMessage("Sending your transport request...");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "Your request could not be sent.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage(
        "Thank you. Your request has been received. Mtseku Transport Services will contact you shortly.",
      );
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Your request could not be sent. Please try again.",
      );
    }
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="booking-route" aria-hidden="true" />
      <div className="page-container">
        <Reveal className="section-heading centered-heading booking-heading">
          <p className="eyebrow eyebrow-light">Request transport</p>
          <h2>Start with the details of your journey.</h2>
          <p>
            Complete the form for a booking request, or use WhatsApp for a
            direct conversation with the Mtseku team.
          </p>
        </Reveal>

        <div className="booking-layout">
          <Reveal className="booking-form-card">
            <div className="booking-card-heading">
              <div>
                <span>Transport request</span>
                <h3>Where can we take you?</h3>
              </div>
              <ShieldCheck aria-hidden="true" />
            </div>

            <form
              className="booking-form"
              onSubmit={handleSubmit}
              aria-busy={status === "submitting"}
            >
              <label className="form-honeypot" aria-hidden="true">
                <span>Company website</span>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

            <div className="form-grid form-grid-2">
              <label>
                <span>Full name *</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                />
              </label>
              <label>
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+27"
                />
              </label>
              <label>
                <span>Number of passengers</span>
                <select name="numberOfPassengers" defaultValue="1">
                  {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (passengers) => (
                      <option key={passengers} value={passengers}>
                        {passengers} passenger{passengers === 1 ? "" : "s"}
                      </option>
                    ),
                  )}
                </select>
              </label>
            </div>

            <div className="form-divider">
              <span>Trip details</span>
            </div>

            <div className="form-grid form-grid-2">
              <label>
                <span>Pickup location</span>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pickup address or area"
                />
              </label>
              <label>
                <span>Drop-off location</span>
                <input
                  type="text"
                  name="dropoffLocation"
                  placeholder="Drop-off address or area"
                />
              </label>
            </div>

            <div className="form-grid form-grid-3">
              <label>
                <span>Preferred date</span>
                <input
                  type="date"
                  name="preferredDate"
                  min={getLocalDate()}
                />
              </label>
              <label>
                <span>Preferred time</span>
                <input type="time" name="preferredTime" />
              </label>
              <label>
                <span>Service type *</span>
                <select name="serviceType" defaultValue="" required>
                  <option value="" disabled>
                    Select service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              <span>Message *</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about the route, passengers, luggage, stops or timing requirements"
              />
            </label>

            <div className="booking-actions">
              <button
                className="button button-accent"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <LoaderCircle className="button-spinner" aria-hidden="true" />
                ) : (
                  <Mail aria-hidden="true" />
                )}
                {status === "submitting"
                  ? "Sending request..."
                  : "Send booking request"}
              </button>
              <a
                className="button button-outline-light"
                href={whatsappBookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Use WhatsApp
              </a>
            </div>
            {status !== "idle" && (
              <p
                className={`form-status form-status-${status}`}
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {statusMessage}
              </p>
            )}
            </form>
          </Reveal>

          <Reveal className="booking-aside" delay={100}>
            <p className="eyebrow eyebrow-light">What happens next</p>
            <h3>A practical conversation about your transport.</h3>
            <p>
              The team will use your details to understand the route, timing
              and passenger requirements before confirming availability and
              the appropriate arrangement.
            </p>

            <div className="booking-benefits">
              {bookingBenefits.map((benefit, index) => (
                <article key={benefit.title}>
                  <span>
                    <benefit.icon aria-hidden="true" />
                  </span>
                  <div>
                    <small>0{index + 1}</small>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <a className="booking-direct-link" href={BUSINESS.phoneHref}>
              Prefer to call? {BUSINESS.phoneDisplay}
              <ArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Booking;
