import Hero from "@/components/Hero";
import JourneyShowcase from "@/components/JourneyShowcase";
import FinalCta from "@/components/FinalCta";
import HomePathways from "@/components/HomePathways";
import PageShell from "@/components/PageShell";

const Index = () => (
  <PageShell path="/">
    <Hero />
    <HomePathways />
    <JourneyShowcase />
    <FinalCta
      eyebrow="Ready to make contact"
      title="Move from planning to a clear transport request."
      description="Send one set of journey details to the team. We will use it to assess the route, timing and transport requirements."
    />
  </PageShell>
);

export default Index;
