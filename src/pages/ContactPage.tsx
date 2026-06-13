import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import heroImage from "@/assets/hero.webp";

const ContactPage = () => (
  <PageShell
    path="/contact"
  >
    <PageHero
      variant="contact"
      eyebrow="Request transport"
      title="A direct line."
      accent="To the booking team."
      description="Use the request form for structured details, or find the phone, email and office information further down the page."
      image={heroImage}
      imageAlt="Mtseku shuttle vehicles beside the Cape Town coastline"
      index="04"
      imageLabel="Cape Town operations"
      details={["Request form", "WhatsApp", "Phone & email"]}
      nextLabel="Start your request"
      nextHref="/contact#booking"
    />
    <Booking />
    <Contact />
  </PageShell>
);

export default ContactPage;
