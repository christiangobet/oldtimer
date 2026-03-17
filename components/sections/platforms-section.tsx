import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportedPlatforms } from "@/lib/site";

export function PlatformsSection() {
  return (
    <section id="platforms" className="section-shell section-padding">
      <Reveal>
        <SectionHeading
          eyebrow="Supported Platforms"
          title="Curated marque coverage for restorations that still deserve the right part."
          description="We focus on heritage platforms where geometry, finish, and fit can’t be treated like commodity inventory."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {supportedPlatforms.map((platform, index) => (
          <Reveal key={platform.name} delay={index * 0.08}>
            <article className="surface-panel group overflow-hidden rounded-[1.75rem]">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={platform.image}
                  alt={platform.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
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
