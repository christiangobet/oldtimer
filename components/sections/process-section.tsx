import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell section-padding">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A measured route from broken original to workshop-ready replacement."
            description="We keep the process technical, calm, and transparent so restoration teams can move without gambling on fit or finish."
          />
        </Reveal>

        <div className="grid gap-5">
          {processSteps.map((step, index) => (
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
