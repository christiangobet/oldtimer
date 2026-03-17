import Image from "next/image";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { OutlineButton } from "@/components/ui/outline-button";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/lib/site";

type HeroSectionProps = {
  content: SiteContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="section-shell relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20"
    >
      <div className="surface-panel relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <GrainOverlay />
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative z-10">
            <p className="section-label line-clamp-2">{content.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.4rem] leading-[0.92] tracking-[0.02em] text-foreground sm:text-5xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#request"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110"
              >
                {content.primaryCtaLabel}
              </a>
              <OutlineButton href="#process">{content.secondaryCtaLabel}</OutlineButton>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.75fr]">
              <div className="relative min-h-[26rem] overflow-hidden rounded-[1.75rem] border border-border bg-surface-strong">
                <Image
                  src="/images/hero-car.jpg"
                  alt="Classic Porsche parked in a structured garage with cinematic light."
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[12rem] overflow-hidden rounded-[1.5rem] border border-border bg-surface">
                  <Image
                    src="/images/machining-detail.jpg"
                    alt="Close-up of machining equipment cutting into metal with coolant spray."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="surface-panel rounded-[1.5rem] p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">
                    {content.workshopNoteLabel}
                  </p>
                  <p className="mt-4 font-display text-3xl text-foreground">
                    {content.workshopNoteTitle}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {content.workshopNoteDescription}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
