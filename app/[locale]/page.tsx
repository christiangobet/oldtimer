import { getSiteContent } from "@/lib/site";
import { isSupportedLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ExamplesSection } from "@/components/sections/examples-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RequestSection } from "@/components/sections/request-section";
import { SustainabilitySection } from "@/components/sections/sustainability-section";
import { SiteHeader } from "@/components/ui/site-header";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <main className="relative overflow-hidden pb-24" lang={locale}>
      <SiteHeader
        locale={locale}
        navigationLinks={content.navigationLinks}
        ctaLabel={content.header.ctaLabel}
        languageToggle={content.languageToggle}
      />
      <HeroSection content={content.hero} />
      <MetricsStrip metrics={content.metrics} />
      <ProcessSection content={content.processSection} steps={content.processSteps} />
      <PlatformsSection
        content={content.platformsSection}
        platforms={content.supportedPlatforms}
      />
      <ExamplesSection content={content.examplesSection} parts={content.exampleParts} />
      <RequestSection content={content.requestSection} formContent={content.requestForm} />
      <SustainabilitySection
        content={content.sustainabilitySection}
        bullets={content.sustainabilityBullets}
      />
      <footer className="section-shell border-t border-border py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-3xl text-foreground">{content.footer.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              {content.footer.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-muted">
            {content.navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted/60">{content.footer.tagline}</p>
          <a
            href="#top"
            className="text-xs uppercase tracking-[0.22em] text-muted/60 transition hover:text-accent"
          >
            {content.footer.backToTop}
          </a>
        </div>
      </footer>
    </main>
  );
}
