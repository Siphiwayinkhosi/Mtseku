import {
  ArrowRight,
  CarFront,
  Headphones,
  MapPinned,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { whatsappBookingUrl } from "@/lib/site";

const reasons = [
  {
    icon: Headphones,
    title: "Request review",
    text: "The team checks the date, route, passenger count and special requirements before responding.",
  },
  {
    icon: Settings,
    title: "Service matching",
    text: "The journey is considered against the available shuttle, private hire, tour or contract options.",
  },
  {
    icon: MapPinned,
    title: "Route planning",
    text: "Pickup points, stops, destination and timing are clarified before the transport arrangement is confirmed.",
  },
  {
    icon: CarFront,
    title: "Vehicle preparation",
    text: "The selected vehicle is prepared around the passenger and luggage information supplied in the request.",
  },
  {
    icon: UsersRound,
    title: "Pickup coordination",
    text: "Relevant journey information is shared so passengers know what to expect at the collection point.",
  },
  {
    icon: ShieldCheck,
    title: "Journey delivery",
    text: "The confirmed arrangement is carried out within Mtseku's operating and passenger-care standards.",
  },
] as const;

const WhyWorkWithUs = () => (
  <section id="why-us" className="section why-section">
    <div className="page-container">
      <Reveal className="section-heading centered-heading">
        <p className="eyebrow">How the service works</p>
        <h2>What happens between your request and pickup.</h2>
        <p>
          A useful request becomes a practical transport arrangement through a
          clear sequence of checks, planning and confirmation.
        </p>
      </Reveal>

      <div className="why-grid">
        {reasons.map((reason, index) => (
          <Reveal
            key={reason.title}
            className="why-card"
            delay={(index % 3) * 70}
          >
            <span className="why-icon">
              <reason.icon aria-hidden="true" />
            </span>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="why-cta">
        <div>
          <p className="eyebrow eyebrow-light">Have the details ready?</p>
          <h3>Send one complete transport request.</h3>
          <p>
            Include the pickup, destination, date, time, passenger count and
            luggage so the team can review it efficiently.
          </p>
        </div>
        <a
          className="button button-accent"
          href={whatsappBookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Send request
          <ArrowRight aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  </section>
);

export default WhyWorkWithUs;
