import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import HashLink from "@/components/HashLink";
import { BUSINESS, NAV_ITEMS, whatsappBookingUrl } from "@/lib/site";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-container">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-brand-lockup" to="/" aria-label={`${BUSINESS.name} home`}>
            <span className="brand-mark">
              <img
                src="/mtseku-mark-light.png"
                alt=""
                width="984"
                height="376"
                loading="lazy"
                aria-hidden="true"
              />
            </span>
            <span className="brand-wordmark" aria-hidden="true">
              <strong>MTSEKU</strong>
              <small>Transport Services</small>
            </span>
          </Link>
          <p>
            Shuttle services, airport transfers, private hire, tours and
            contract transport across Cape Town, Johannesburg and beyond.
          </p>
          <div className="footer-social">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Book Mtseku Transport on WhatsApp"
            >
              <MessageCircle aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call ${BUSINESS.phoneDisplay}`}
            >
              <Phone aria-hidden="true" />
            </a>
            <a href={BUSINESS.emailHref} aria-label={`Email ${BUSINESS.email}`}>
              <Mail aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Navigate</h2>
          <nav aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h2>Services</h2>
          <HashLink to="/services#services">Shuttle services</HashLink>
          <HashLink to="/services#services">Tours &amp; sightseeing</HashLink>
          <HashLink to="/services#services">Private hire</HashLink>
          <HashLink to="/services#services">Contract transport</HashLink>
          <HashLink to="/services#services">Airport transfers</HashLink>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          {BUSINESS.addresses.map((address) => (
            <a
              key={address.city}
              href={address.directions}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" />
              <span>
                <strong>{address.city}</strong>
                {address.lines[0]}
                <br />
                {address.lines[1]}
              </span>
            </a>
          ))}
          <a href={BUSINESS.phoneHref}>
            <Phone aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a href={BUSINESS.emailHref}>
            <Mail aria-hidden="true" />
            {BUSINESS.email}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
        </p>
        <nav aria-label="Legal">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/cookie-notice">Cookie notice</Link>
          <Link to="/terms-of-use">Terms of use</Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
