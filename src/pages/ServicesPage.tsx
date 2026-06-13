import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import heroImage from "@/assets/service1.webp";

const ServicesPage = () => (
  <PageShell
    path="/services"
  >
    <PageHero
      variant="services"
      eyebrow="Transport solutions"
      title="One transport team."
      accent="Four ways to move."
      description="Compare the service types before you request a quote, from once-off travel to regular passenger transport."
      image={heroImage}
      imageAlt="Mtseku shuttle vehicle ready for passenger transport"
      index="01"
      imageLabel="Passenger transport"
      details={["Shuttles", "Tours", "Private hire", "Contracts"]}
    />
    <Services />
    <WhyWorkWithUs />
    <ServiceAreas />
  </PageShell>
);

export default ServicesPage;
