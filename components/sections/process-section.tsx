import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProcessStep, SiteContent } from "@/lib/site";

type ProcessSectionProps = {
  content: SiteContent["processSection"];
  steps: readonly ProcessStep[];
};

export function ProcessSection({ content, steps }: ProcessSectionProps) {
  return (
    <section id="process" className="section-shell section-padding">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <div className="grid gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <article className="surface-panel rounded-[1.75rem] p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border font-display text-2xl text-accent">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-foreground">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
