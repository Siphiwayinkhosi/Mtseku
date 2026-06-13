import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BUSINESS, NAV_ITEMS, whatsappBookingUrl } from "@/lib/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <span className="scroll-progress" aria-hidden="true" />
      <div className="nav-container">
        <Link className="brand" to="/" aria-label={`${BUSINESS.name} home`}>
          <span className="brand-mark">
            <img
              className="brand-mark-light"
              src="/mtseku-mark-light.png"
              alt=""
              width="984"
              height="376"
              aria-hidden="true"
            />
            <img
              className="brand-mark-color"
              src="/mtseku-mark-color.png"
              alt=""
              width="984"
              height="376"
              aria-hidden="true"
            />
          </span>
          <span className="brand-wordmark" aria-hidden="true">
            <strong>MTSEKU</strong>
            <small>Transport Services</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="button button-accent nav-cta"
          href={whatsappBookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          Book on WhatsApp
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button-accent"
            href={whatsappBookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle aria-hidden="true" />
            Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
