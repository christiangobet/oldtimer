import { ExamplesSection } from "@/components/sections/examples-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RequestSection } from "@/components/sections/request-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { SiteHeader } from "@/components/ui/site-header";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden pb-24">
      <SiteHeader />
      <HeroSection />
      <MetricsStrip />
      <ProcessSection />
      <PlatformsSection />
      <ExamplesSection />
      <RequestSection />
      <SustainabilitySection />
    </main>
  );
}
