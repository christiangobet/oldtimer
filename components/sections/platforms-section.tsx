import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Platform, SiteContent } from "@/lib/site";

type PlatformsSectionProps = {
  content: SiteContent["platformsSection"];
  platforms: readonly Platform[];
};

export function PlatformsSection({ content, platforms }: PlatformsSectionProps) {
  return (
    <section id="platforms" className="section-shell section-padding">
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {platforms.map((platform, index) => (
          <Reveal key={platform.name} delay={index * 0.08}>
            <article className="surface-panel group cursor-pointer overflow-hidden rounded-[1.75rem] border border-border transition-colors duration-300 hover:border-accent/40">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={platform.image}
                  alt={platform.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: platform.imagePosition }}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-4xl text-foreground">{platform.name}</h3>
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">{platform.years}</p>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                  {platform.summary}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
