import {
  ArrowRight,
  BriefcaseBusiness,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import HashLink from "@/components/HashLink";
import heroImage from "@/assets/hero.webp";
import { BUSINESS, whatsappBookingUrl } from "@/lib/site";

const Hero = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <img
        className="hero-background"
        src={heroImage}
        alt="Mtseku shuttle vehicles beside the Cape Town coastline"
        width="1280"
        height="960"
        fetchPriority="high"
        decoding="async"
        data-parallax="0.23"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="route-lines" aria-hidden="true" data-parallax="-0.08">
        <span />
        <span />
        <span />
      </div>

      <div className="page-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">
            Cape Town · Johannesburg · Transport across South Africa
          </p>
          <h1 id="hero-title">
            Professional transport,
            <span>planned around your journey.</span>
          </h1>
          <p className="hero-intro">
            Safe, reliable and comfortable shuttle services, airport transfers,
            private hire, tours and contract transport for individuals,
            families, groups and businesses.
          </p>

          <div className="hero-actions">
            <a
              className="button button-accent"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              Book on WhatsApp
            </a>
            <HashLink className="button button-ghost" to="/contact#booking">
              Request transport
              <ArrowRight aria-hidden="true" />
            </HashLink>
            <a
              className="hero-call"
              href={BUSINESS.phoneHref}
              aria-label={`Call Mtseku Transport Services on ${BUSINESS.phoneDisplay}`}
            >
              <Phone aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <ul className="hero-trust" aria-label="Service highlights">
            <li>
              <UserRoundCheck aria-hidden="true" />
              Professional drivers
            </li>
            <li>
              <ShieldCheck aria-hidden="true" />
              Passenger liability insurance
            </li>
            <li>
              <MapPinned aria-hidden="true" />
              Cape Town &amp; Johannesburg
            </li>
            <li>
              <BriefcaseBusiness aria-hidden="true" />
              Private &amp; business travel
            </li>
          </ul>
        </div>

        <aside
          className="hero-route-card"
          aria-label="Mtseku service overview"
          data-parallax="-0.07"
        >
          <p className="route-card-kicker">Your route. Our responsibility.</p>
          <div className="route-card-path" aria-hidden="true">
            <span className="route-dot route-dot-start" />
            <span className="route-track" />
            <span className="route-dot route-dot-end" />
          </div>
          <div className="route-stops">
            <div>
              <span>From</span>
              <strong>Your pickup point</strong>
            </div>
            <div>
              <span>To</span>
              <strong>Your destination</strong>
            </div>
          </div>
          <p>
            Tell us where, when and how many passengers. We will help plan the
            right transport solution.
          </p>
          <HashLink to="/contact#booking">
            Start a booking request
            <ArrowRight aria-hidden="true" />
          </HashLink>
        </aside>
      </div>

      <HashLink
        className="hero-scroll"
        to="/#start-here"
        aria-label="Scroll to the website guide"
      >
        <span aria-hidden="true" />
        Choose your path
      </HashLink>
    </section>
  );
};

export default Hero;
