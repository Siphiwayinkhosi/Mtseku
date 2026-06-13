import About from "@/components/About";
import Careers from "@/components/Careers";
import Drivers from "@/components/Drivers";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import heroImage from "@/assets/gallery6.webp";

const AboutPage = () => (
  <PageShell
    path="/about"
  >
    <PageHero
      variant="about"
      eyebrow="The company"
      title="Built locally."
      accent="Driven responsibly."
      description="Learn what Mtseku stands for, how the team approaches its work and the standards expected from the people representing the business."
      image={heroImage}
      imageAlt="Mtseku transport vehicle and luggage trailer"
      index="02"
      imageLabel="South African owned"
      details={["Responsibility", "People", "Ethical growth"]}
      nextLabel="Meet our standards"
      nextHref="/about#drivers"
    />
    <About />
    <Drivers />
    <Careers />
  </PageShell>
);

export default AboutPage;
