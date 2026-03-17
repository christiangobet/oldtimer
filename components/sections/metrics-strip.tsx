import { Reveal } from "@/components/ui/reveal";
import { StatPill } from "@/components/ui/stat-pill";
import type { Metric } from "@/lib/site";

type MetricsStripProps = {
  metrics: readonly Metric[];
};

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section className="section-shell pb-12 sm:pb-20">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {metrics.map((metric) => (
            <StatPill key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
