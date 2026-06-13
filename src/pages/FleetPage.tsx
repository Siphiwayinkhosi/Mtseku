import FleetPlanning from "@/components/FleetPlanning";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import heroImage from "@/assets/gallery1.webp";

const FleetPage = () => (
  <PageShell
    path="/fleet"
  >
    <PageHero
      variant="fleet"
      eyebrow="Fleet & journeys"
      title="See what arrives."
      accent="Know what to share."
      description="View vehicles used on real Mtseku work, then check the information that helps the team plan a suitable allocation."
      image={heroImage}
      imageAlt="Mtseku shuttle vehicle travelling in South Africa"
      index="03"
      imageLabel="Vehicles on real routes"
      details={["Passenger space", "Luggage", "Route fit"]}
      nextLabel="View the gallery"
      nextHref="/fleet#gallery"
    />
    <Gallery />
    <FleetPlanning />
  </PageShell>
);

export default FleetPage;
