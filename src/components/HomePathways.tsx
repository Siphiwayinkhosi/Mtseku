import { ArrowUpRight, Building2, CalendarCheck, Route } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const pathways = [
  {
    icon: Route,
    number: "01",
    title: "I am comparing transport options",
    text: "See which service fits an airport transfer, regular route, tour, private trip or contract requirement.",
    label: "Compare services",
    href: "/services",
  },
  {
    icon: Building2,
    number: "02",
    title: "I want to know who I am travelling with",
    text: "Meet the company, understand our operating principles and see what we expect from every driver.",
    label: "Meet Mtseku",
    href: "/about",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "I already have the journey details",
    text: "Send the date, pickup, destination and passenger information directly to the booking team.",
    label: "Start a request",
    href: "/contact#booking",
  },
] as const;

const HomePathways = () => (
  <section id="start-here" className="section pathways-section">
    <div className="page-container">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Start here</p>
          <h2>Choose the information you need.</h2>
        </div>
        <p>
          The site is organised around three simple questions, so you can reach
          the useful detail without scrolling through everything at once.
        </p>
      </Reveal>

      <div className="pathways-grid">
        {pathways.map((pathway, index) => (
          <Reveal
            key={pathway.number}
            className="pathway-card"
            delay={index * 80}
          >
            <div className="pathway-card-top">
              <span>
                <pathway.icon aria-hidden="true" />
              </span>
              <small>{pathway.number}</small>
            </div>
            <h3>{pathway.title}</h3>
            <p>{pathway.text}</p>
            <Link to={pathway.href}>
              {pathway.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomePathways;
