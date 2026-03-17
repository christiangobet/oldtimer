import { RequestForm } from "@/components/request-form";
import { Reveal } from "@/components/ui/reveal";

export function RequestSection() {
  return (
    <section id="request" className="section-shell section-padding">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <div className="surface-panel h-full rounded-[1.75rem] p-8 sm:p-10">
            <p className="section-label">Request a Part</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.96] text-foreground">
              Tell us what failed, what vehicle it belongs to, and what the restoration can’t wait
              on.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              We built this first release as a focused frontend experience so workshops can preview
              the request flow before backend handling is introduced.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
            <RequestForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
