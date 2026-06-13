import {
  Building2,
  Eye,
  Globe2,
  HandHeart,
  Leaf,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import aboutImage from "@/assets/gallery2.webp";

const responsibilityPillars = [
  {
    icon: Building2,
    title: "Community impact",
    text: "We create local employment, support youth and skills development, and partner with organisations to promote road safety and community growth in Cape Town, Johannesburg and beyond.",
  },
  {
    icon: Leaf,
    title: "Environmental care",
    text: "We operate a well-maintained, fuel-efficient fleet, promote digital systems to reduce waste, and explore greener transport options for a sustainable future.",
  },
  {
    icon: HandHeart,
    title: "Employee wellbeing",
    text: "Our drivers and staff are the heart of our business. We support fair working conditions, ongoing training and equal opportunities for all.",
  },
  {
    icon: Scale,
    title: "Ethical conduct",
    text: "Integrity and accountability guide our work. We comply with the Companies Act, CPA and transport laws, with zero tolerance for corruption or unethical practices.",
  },
  {
    icon: Globe2,
    title: "Building a better future",
    text: "As we expand, we remain dedicated to empowering communities, operating responsibly and being a transport company that drives progress and purpose across South Africa and the SADC region.",
  },
] as const;

const About = () => (
  <section id="about" className="section about-section">
    <div className="page-container">
      <div className="about-layout">
        <Reveal className="about-visual">
          <img
            src={aboutImage}
            alt="Mtseku shuttle vehicle serving a Cape Town scenic route"
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
          />
          <div className="about-visual-card">
            <ShieldCheck aria-hidden="true" />
            <div>
              <strong>Passenger safety first</strong>
              <span>Maintained vehicles and liability insurance</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={100}>
          <p className="eyebrow">About Mtseku</p>
          <h2>A South African transport company built on responsibility.</h2>
          <p className="lead">
            At Mtseku Transport Services, your journey is our priority. We are
            founded on safety, reliability and excellence, with every trip
            handled with care.
          </p>
          <p>
            Our commitment to passenger safety goes beyond compliance, from
            well-maintained vehicles and passenger liability insurance to
            trained, professional drivers who put your wellbeing first.
          </p>
          <p>
            We aim to be clear before pickup, attentive during travel and
            accountable for the standards associated with the Mtseku name.
            That principle guides how the team communicates, prepares and
            represents the business.
          </p>

          <div className="mission-grid">
            <article>
              <Eye aria-hidden="true" />
              <div>
                <h3>Our vision</h3>
                <p>
                  To be South Africa&apos;s most trusted and ethical transport
                  partner.
                </p>
              </div>
            </article>
            <article>
              <Target aria-hidden="true" />
              <div>
                <h3>Our mission</h3>
                <p>
                  Deliver personalised, safe and seamless transport services
                  across South Africa.
                </p>
              </div>
            </article>
          </div>
        </Reveal>
      </div>

      <Reveal className="responsibility-heading">
        <p className="eyebrow">Responsible growth</p>
        <h2>Progress for people, communities and the road ahead.</h2>
        <p>
          Our responsibility extends beyond transport. It shapes how we care
          for passengers, employees, communities and the environment.
        </p>
      </Reveal>

      <div className="responsibility-grid">
        {responsibilityPillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            className="responsibility-card"
            delay={(index % 3) * 70}
          >
            <pillar.icon aria-hidden="true" />
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
