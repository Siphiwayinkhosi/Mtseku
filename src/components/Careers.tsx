import { ArrowUpRight, GraduationCap, HandHeart, Scale, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/site";

const commitments = [
  { icon: Scale, label: "Fair working conditions" },
  { icon: GraduationCap, label: "Ongoing training" },
  { icon: Users, label: "Equal opportunities" },
] as const;

const Careers = () => (
  <section id="careers" className="careers-section">
    <div className="page-container">
      <Reveal className="careers-card">
        <div className="careers-icon">
          <HandHeart aria-hidden="true" />
        </div>
        <div className="careers-copy">
          <p className="eyebrow">Careers at Mtseku</p>
          <h2>Work with a company that values people and professionalism.</h2>
          <p>
            Our drivers and staff are central to our service. We are committed
            to fair working conditions, ongoing development and equal
            opportunity as the company grows.
          </p>
          <div className="career-commitments">
            {commitments.map((commitment) => (
              <span key={commitment.label}>
                <commitment.icon aria-hidden="true" />
                {commitment.label}
              </span>
            ))}
          </div>
        </div>
        <a
          className="button button-dark"
          href={`${BUSINESS.emailHref}?subject=${encodeURIComponent(
            "Careers enquiry - Mtseku Transport Services",
          )}`}
        >
          Send a careers enquiry
          <ArrowUpRight aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Careers;
