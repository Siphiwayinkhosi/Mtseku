import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/site";

const faqs = [
  {
    question: "How do I make a booking?",
    answer:
      "Send a request through the booking form, WhatsApp the team, or call directly. Mtseku will review your route, date, time and passenger requirements before confirming the transport arrangement.",
  },
  {
    question: "Are your vehicles insured?",
    answer:
      "Yes. Mtseku states that its vehicles are fully insured, including passenger liability insurance.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes. Airport transfer services are available in the Cape Town and Johannesburg service regions.",
  },
  {
    question: "Can I request a custom transport solution?",
    answer:
      "Yes. Transport can be tailored for individuals, families, groups, schools and corporate clients, subject to route and vehicle availability.",
  },
] as const;

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="section contact-section">
      <div className="page-container">
        <div className="contact-layout">
          <Reveal className="contact-details">
            <p className="eyebrow">Offices and direct lines</p>
            <h2>Visit, call or email the team.</h2>
            <div className="office-grid">
              {BUSINESS.addresses.map((address) => (
                <article key={address.city}>
                  <span className="contact-icon">
                    <MapPin aria-hidden="true" />
                  </span>
                  <div>
                    <small>{address.area}</small>
                    <h3>{address.city}</h3>
                    <address>
                      {address.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                    <a
                      href={address.directions}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Navigation aria-hidden="true" />
                      Get directions
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="direct-contact-grid">
              <a href={BUSINESS.phoneHref}>
                <Phone aria-hidden="true" />
                <span>
                  <small>Call</small>
                  <strong>{BUSINESS.phoneDisplay}</strong>
                </span>
              </a>
              <a href={BUSINESS.emailHref}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  <strong>{BUSINESS.email}</strong>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal className="faq-panel" delay={100}>
            <p className="eyebrow">Frequently asked</p>
            <h2>Useful details before you book.</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <article key={faq.question} className={isOpen ? "is-open" : ""}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        {faq.question}
                        <ChevronDown aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={`faq-answer-${index}`} hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
