import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ExamplePart, SiteContent } from "@/lib/site";

type ExamplesSectionProps = {
  content: SiteContent["examplesSection"];
  parts: readonly ExamplePart[];
};

export function ExamplesSection({ content, parts }: ExamplesSectionProps) {
  return (
    <section id="examples" className="section-shell section-padding pt-0">
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {parts.map((part, index) => (
          <Reveal key={part.name} delay={index * 0.08}>
            <article className="surface-panel grid overflow-hidden rounded-[1.75rem] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-72">
                <Image
                  src={part.image}
                  alt={part.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">{part.process}</p>
                  <h3 className="mt-4 font-display text-4xl text-foreground">{part.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{part.note}</p>
                </div>
                <p className="mt-8 border-t border-border pt-4 text-sm uppercase tracking-[0.2em] text-foreground/80">
                  {content.footerLabel}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
