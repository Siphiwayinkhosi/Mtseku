import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import coastImage from "@/assets/gallery2.webp";
import airportImage from "@/assets/gallery4.webp";

const JourneyShowcase = () => (
  <section className="journey-showcase">
    <div className="journey-grid" aria-hidden="true" />
    <div className="page-container journey-layout">
      <Reveal className="journey-copy">
        <p className="eyebrow eyebrow-light">The journey, considered</p>
        <h2>Made for the moments between departure and arrival.</h2>
        <p>
          Airport pickups, business routes and private tours all need different
          planning. Our role is to make every stage feel clear, comfortable and
          professionally handled.
        </p>
        <Link to="/fleet">
          Explore our fleet and journeys
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>

      <div className="journey-canvas">
        <figure className="journey-image journey-image-primary" data-parallax="0.2">
          <img
            src={coastImage}
            alt="Mtseku tour vehicle overlooking the Cape Town coastline"
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <MapPin aria-hidden="true" />
            Cape Town routes
          </figcaption>
        </figure>

        <figure className="journey-image journey-image-secondary" data-parallax="-0.13">
          <img
            src={airportImage}
            alt="Mtseku vehicles ready for an airport transfer"
            width="1280"
            height="960"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Airport transfers</figcaption>
        </figure>

        <div className="journey-route" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </section>
);

export default JourneyShowcase;
