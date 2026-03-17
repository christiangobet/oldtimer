type StatPillProps = {
  value: string;
  label: string;
};

export function StatPill({ value, label }: StatPillProps) {
  return (
    <div className="surface-panel rounded-full px-5 py-3">
      <p className="font-display text-3xl leading-none text-foreground sm:text-4xl">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">{label}</p>
    </div>
  );
}
