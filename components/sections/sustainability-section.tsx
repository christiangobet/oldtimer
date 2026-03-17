import Image from "next/image";
import { OutlineButton } from "@/components/ui/outline-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SiteContent } from "@/lib/site";

type SustainabilitySectionProps = {
  content: SiteContent["sustainabilitySection"];
  bullets: readonly string[];
};

export function SustainabilitySection({ content, bullets }: SustainabilitySectionProps) {
  return (
    <section className="section-shell section-padding pt-0">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-border">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-panel rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
            <ul className="mt-8 grid gap-4">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-[1.25rem] border border-border bg-black/20 px-4 py-4 text-sm leading-7 text-muted sm:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <OutlineButton href="#request">{content.ctaLabel}</OutlineButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
