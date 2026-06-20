import { ArrowRight, Building2, MapPin, Navigation } from "lucide-react";
import HashLink from "@/components/HashLink";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/site";

const areas = [
  {
    city: "Johannesburg",
    detail:
      "Shuttle, airport transfer, private hire and contract transport support across Johannesburg.",
    label: "Gauteng service area",
  },
  {
    city: "Randburg",
    detail:
      "Local transport services from our Ferndale, Randburg base for personal and business travel.",
    label: "Johannesburg base",
  },
  {
    city: "Cape Town",
    detail:
      "Airport transfers, tours, shuttles and private transport across Cape Town and surrounding routes.",
    label: "Western Cape service area",
  },
  {
    city: "Parklands",
    detail:
      "Convenient transport planning from our Parklands base for Cape Town journeys and tours.",
    label: "Cape Town base",
  },
] as const;

const ServiceAreas = () => (
  <section id="service-areas" className="service-areas">
    <div className="area-map-pattern" aria-hidden="true" />
    <div className="page-container area-layout">
      <Reveal className="area-intro">
        <p className="eyebrow eyebrow-light">Where we operate</p>
        <h2>Local knowledge in two major South African regions.</h2>
        <p>
          Mtseku has a strong presence in Johannesburg and Cape Town, with bases
          in Randburg and Parklands. We also arrange transport for journeys
          beyond these areas across South Africa.
        </p>
        <div className="area-office-links">
          {BUSINESS.addresses.map((address) => (
            <a
              key={address.city}
              href={address.directions}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation aria-hidden="true" />
              Directions to {address.city}
            </a>
          ))}
        </div>
      </Reveal>

      <div className="area-grid">
        {areas.map((area, index) => (
          <Reveal key={area.city} className="area-card" delay={index * 70}>
            <div className="area-card-top">
              {index % 2 === 0 ? (
                <MapPin aria-hidden="true" />
              ) : (
                <Building2 aria-hidden="true" />
              )}
              <span>{area.label}</span>
            </div>
            <h3>{area.city}</h3>
            <p>{area.detail}</p>
            <HashLink to="/contact#booking">
              Request transport
              <ArrowRight aria-hidden="true" />
            </HashLink>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
