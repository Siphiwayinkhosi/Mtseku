import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import fleetImage from "@/assets/gallery1.webp";
import airportImage from "@/assets/gallery4.webp";
import scenicImage from "@/assets/gallery2.webp";
import interiorImage from "@/assets/service2.webp";
import privateHireImage from "@/assets/gallery.jpg";
import luggageImage from "@/assets/gallery6.webp";
import roadImage from "@/assets/service4.jpg";

const galleryItems = [
  {
    image: fleetImage,
    title: "Fleet for varied journeys",
    alt: "Mtseku shuttle vehicle with tour vehicles in South Africa",
    width: 1600,
    height: 900,
    className: "gallery-wide",
  },
  {
    image: airportImage,
    title: "Airport transfer pickups",
    alt: "Mtseku airport transfer vehicles at a terminal",
    width: 1280,
    height: 960,
    className: "",
  },
  {
    image: roadImage,
    title: "Long-distance route ready",
    alt: "Silver Mtseku transport vehicle on an open South African road",
    width: 1200,
    height: 1600,
    className: "",
  },
  {
    image: scenicImage,
    title: "Cape Town tours",
    alt: "Mtseku tour vehicle at False Bay in Cape Town",
    width: 1600,
    height: 1200,
    className: "",
  },
  {
    image: interiorImage,
    title: "Passenger comfort",
    alt: "Clean leather passenger seating inside a Mtseku shuttle",
    width: 1280,
    height: 960,
    className: "",
  },
  {
    image: privateHireImage,
    title: "Private hire",
    alt: "Silver Mtseku vehicle available for private hire",
    width: 1200,
    height: 1600,
    className: "",
  },
  {
    image: luggageImage,
    title: "Room for longer trips",
    alt: "Mtseku shuttle vehicle with luggage trailer",
    width: 1600,
    height: 900,
    className: "gallery-wide",
  },
] as const;

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") {
        setSelected((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSelected((current) =>
          current === null
            ? 0
            : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const previous = () =>
    setSelected((current) =>
      current === null
        ? 0
        : (current - 1 + galleryItems.length) % galleryItems.length,
    );

  const next = () =>
    setSelected((current) =>
      current === null ? 0 : (current + 1) % galleryItems.length,
    );

  return (
    <>
      <section id="gallery" className="section gallery-section">
        <div className="page-container">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Fleet &amp; journeys</p>
              <h2>Real vehicles. Real routes. Practical comfort.</h2>
            </div>
            <p>
              A closer look at the vehicles and journey settings already used
              across Mtseku&apos;s shuttle, transfer, tour and private hire work.
            </p>
          </Reveal>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Reveal
                key={item.title}
                className={`gallery-item ${item.className}`}
                delay={(index % 3) * 60}
              >
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-label={`Open image: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">
                    <strong>{item.title}</strong>
                    <Expand aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[selected].title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close image viewer"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={previous}
            aria-label="View previous image"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <figure>
            <img
              src={galleryItems[selected].image}
              alt={galleryItems[selected].alt}
            />
            <figcaption>
              {galleryItems[selected].title}
              <span>
                {selected + 1} / {galleryItems.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={next}
            aria-label="View next image"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
