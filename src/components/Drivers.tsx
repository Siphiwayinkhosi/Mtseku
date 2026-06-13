import {
  BadgeCheck,
  HeartHandshake,
  MapPinned,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import driversImage from "@/assets/gallery4.webp";

const driverStandards = [
  {
    icon: BadgeCheck,
    title: "Professional readiness",
    text: "Drivers hold the required professional permits and operate within our insured transport service.",
  },
  {
    icon: ShieldCheck,
    title: "Road safety",
    text: "Safety procedures and responsible driving guide every passenger journey.",
  },
  {
    icon: HeartHandshake,
    title: "Customer care",
    text: "Courteous, clear communication helps every passenger feel respected and supported.",
  },
  {
    icon: MapPinned,
    title: "Route knowledge",
    text: "Practical knowledge of Cape Town and Johannesburg supports efficient trip planning.",
  },
  {
    icon: Scale,
    title: "Professional ethics",
    text: "Integrity, accountability and respect are expected in every interaction.",
  },
  {
    icon: UserRoundCheck,
    title: "Ongoing development",
    text: "Training supports consistent service, passenger care and professional standards.",
  },
] as const;

const Drivers = () => (
  <section id="drivers" className="section drivers-section">
    <div className="page-container drivers-layout">
      <Reveal className="drivers-copy">
        <p className="eyebrow eyebrow-light">Professional drivers</p>
        <h2>The people behind every well-planned journey.</h2>
        <p className="lead">
          Our drivers are more than people behind the wheel. They represent our
          commitment to road safety, customer care, ethical conduct and
          professional operations.
        </p>
        <div className="driver-standards">
          {driverStandards.map((standard, index) => (
            <article key={standard.title}>
              <span>
                <standard.icon aria-hidden="true" />
              </span>
              <div>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </div>
              <small>0{index + 1}</small>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="drivers-visual" delay={100}>
        <img
          src={driversImage}
          alt="Mtseku shuttle vehicles at an airport passenger pickup area"
          width="1280"
          height="960"
          loading="lazy"
          decoding="async"
        />
        <div className="drivers-visual-note">
          <ShieldCheck aria-hidden="true" />
          <div>
            <strong>Professional operations</strong>
            <span>Safety, care and accountability</span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Drivers;
