import {
  ArrowUpRight,
  BriefcaseBusiness,
  BusFront,
  CarFront,
  Check,
  Map,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import shuttleImage from "@/assets/service1.webp";
import toursImage from "@/assets/gallery2.webp";
import privateHireImage from "@/assets/gallery.jpg";
import contractImage from "@/assets/gallery6.webp";
import { BUSINESS } from "@/lib/site";

const services = [
  {
    icon: BusFront,
    title: "Shuttle Services",
    description:
      "Reliable daily shuttles for corporate clients, schools and regular commutes, with comfortable, punctual and professional transport.",
    image: shuttleImage,
    width: 960,
    height: 1280,
    alt: "Mtseku shuttle vehicle ready for a pickup in Cape Town",
    features: [
      "Corporate shuttles",
      "School transport",
      "Airport transfers",
      "Regular routes",
    ],
  },
  {
    icon: Map,
    title: "Tours",
    description:
      "Discover South Africa with transport for wine estates, cultural landmarks, scenic routes and custom itineraries.",
    image: toursImage,
    width: 1600,
    height: 1200,
    alt: "Mtseku tour vehicle at False Bay in Cape Town",
    features: [
      "Wine tours",
      "Garden Route",
      "Cultural experiences",
      "Custom itineraries",
    ],
  },
  {
    icon: CarFront,
    title: "Private Hire",
    description:
      "Private vehicle hire for special occasions, business meetings, events and personal travel, arranged around your schedule.",
    image: privateHireImage,
    width: 1200,
    height: 1600,
    alt: "Silver Mtseku private hire vehicle in South Africa",
    features: [
      "Executive travel",
      "Event transport",
      "Personal travel",
      "Flexible booking",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Contract Transport",
    description:
      "Long-term transport solutions for businesses and individuals who need regular, dedicated vehicles and professional drivers.",
    image: contractImage,
    width: 1600,
    height: 900,
    alt: "Mtseku vehicle and luggage trailer for contract transport",
    features: [
      "Dedicated vehicles & drivers",
      "Flexible schedules",
      "Professional service",
      "Customised solutions",
    ],
  },
] as const;

const Services = () => (
  <section id="services" className="section services-section">
    <div className="page-container">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Transport solutions</p>
          <h2>Every journey deserves the right service.</h2>
        </div>
        <p>
          From a single airport transfer to a regular business route, Mtseku
          provides practical transport tailored to your passengers, timing and
          destination.
        </p>
      </Reveal>

      <div className="services-grid">
        {services.map((service, index) => {
          const bookingUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(
            `Hello Mtseku Transport Services. I would like a quote for ${service.title}.`,
          )}`;

          return (
            <Reveal
              key={service.title}
              className="service-card"
              delay={(index % 2) * 100}
            >
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon">
                  <service.icon aria-hidden="true" />
                </span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Request this service
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
