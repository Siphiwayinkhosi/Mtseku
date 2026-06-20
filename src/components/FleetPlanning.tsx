import {
  ArrowRight,
  Clock3,
  Luggage,
  MapPinned,
  UsersRound,
} from "lucide-react";
import HashLink from "@/components/HashLink";
import Reveal from "@/components/Reveal";

const planningDetails = [
  {
    icon: UsersRound,
    title: "Passenger count",
    text: "Adults, children and group size help determine the practical vehicle arrangement.",
  },
  {
    icon: Luggage,
    title: "Luggage needs",
    text: "Tell us about suitcases, equipment or extra cargo before the vehicle is allocated.",
  },
  {
    icon: MapPinned,
    title: "Route shape",
    text: "Multiple stops, airport access and longer distances affect how the journey is planned.",
  },
  {
    icon: Clock3,
    title: "Timing",
    text: "Pickup time, return travel and waiting requirements should be included in the request.",
  },
] as const;

const FleetPlanning = () => (
  <section className="section fleet-planning">
    <div className="page-container fleet-planning-layout">
      <Reveal className="fleet-planning-copy">
        <p className="eyebrow eyebrow-light">Vehicle allocation</p>
        <h2>The useful details come before the vehicle choice.</h2>
        <p>
          We do not ask visitors to guess a vehicle from a photograph. Share
          the practical requirements and the team can assess the appropriate
          transport arrangement.
        </p>
        <HashLink className="button button-accent" to="/contact#booking">
          Share your requirements
          <ArrowRight aria-hidden="true" />
        </HashLink>
      </Reveal>

      <div className="fleet-planning-grid">
        {planningDetails.map((detail, index) => (
          <Reveal
            key={detail.title}
            className="fleet-planning-card"
            delay={index * 70}
          >
            <detail.icon aria-hidden="true" />
            <span>0{index + 1}</span>
            <h3>{detail.title}</h3>
            <p>{detail.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FleetPlanning;
