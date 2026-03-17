import { RequestForm } from "@/components/request-form";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/lib/site";

type RequestSectionProps = {
  content: SiteContent["requestSection"];
  formContent: SiteContent["requestForm"];
};

export function RequestSection({ content, formContent }: RequestSectionProps) {
  return (
    <section id="request" className="section-shell section-padding">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <div className="surface-panel h-full rounded-[1.75rem] p-8 sm:p-10">
            <p className="section-label">{content.eyebrow}</p>
            <h2 className="mt-5 font-display text-[1.85rem] leading-[1.05] text-foreground [hyphens:auto] [overflow-wrap:break-word] sm:text-4xl sm:leading-[0.96] lg:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              {content.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
            <RequestForm content={formContent} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
