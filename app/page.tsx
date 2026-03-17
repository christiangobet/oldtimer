import { ExamplesSection } from "@/components/sections/examples-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RequestSection } from "@/components/sections/request-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { SiteHeader } from "@/components/ui/site-header";
import { navigationLinks } from "@/lib/site";

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
      <footer className="section-shell border-t border-border py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-3xl text-foreground">OldPart Precision</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              Precision-led remanufacturing for rare heritage vehicle components.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-muted">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
