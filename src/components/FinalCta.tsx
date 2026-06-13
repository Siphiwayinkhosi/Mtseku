import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { whatsappBookingUrl } from "@/lib/site";

type FinalCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

const FinalCta = ({
  eyebrow = "Plan your next journey",
  title = "Tell us where you need to go.",
  description = "Share your route, date and passenger numbers. Mtseku will help you choose the right transport solution.",
}: FinalCtaProps) => (
  <section className="final-cta">
    <div className="page-container">
      <Reveal className="final-cta-card">
        <div>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="final-cta-actions">
          <Link className="button button-light" to="/contact#booking">
            Request transport
            <ArrowRight aria-hidden="true" />
          </Link>
          <a
            className="button button-outline-light"
            href={whatsappBookingUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            WhatsApp us
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
