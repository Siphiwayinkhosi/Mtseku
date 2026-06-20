import { ArrowDownRight, ArrowRight } from "lucide-react";
import HashLink from "@/components/HashLink";

type PageHeroProps = {
  variant: "services" | "about" | "fleet" | "contact";
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  index: string;
  details?: readonly string[];
  imageLabel?: string;
  nextLabel?: string;
  nextHref?: string;
};

const PageHero = ({
  variant,
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  index,
  details = [],
  imageLabel,
  nextLabel = "Request transport",
  nextHref = "/contact#booking",
}: PageHeroProps) => (
  <section
    className={`page-hero page-hero--${variant}`}
    aria-labelledby="page-hero-title"
  >
    <div className="page-hero-media">
      <img
        className="page-hero-image"
        src={image}
        alt={imageAlt}
        width="1600"
        height="1067"
        fetchPriority="high"
        decoding="async"
        data-parallax="0.18"
      />
      {imageLabel && <span className="page-hero-media-label">{imageLabel}</span>}
    </div>
    <div className="page-hero-overlay" aria-hidden="true" />
    <div className="page-hero-orbit" aria-hidden="true" data-parallax="-0.08">
      <span />
      <span />
    </div>

    <div className="page-container page-hero-layout">
      <div className="page-hero-copy">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 id="page-hero-title">
          {title}
          <span>{accent}</span>
        </h1>
        <p>{description}</p>
        {details.length > 0 && (
          <ul className="page-hero-details" aria-label={`${eyebrow} highlights`}>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        <HashLink className="button button-accent" to={nextHref}>
          {nextLabel}
          <ArrowRight aria-hidden="true" />
        </HashLink>
      </div>

      <div className="page-hero-index" aria-hidden="true">
        <span>{index}</span>
        <ArrowDownRight />
      </div>
    </div>
  </section>
);

export default PageHero;
