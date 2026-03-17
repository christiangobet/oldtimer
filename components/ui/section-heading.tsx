type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <div className="space-y-4">
        <h2 className="font-display text-4xl leading-none tracking-[0.02em] text-foreground sm:text-5xl">
          {title}
        </h2>
        {description ? <p className="section-kicker text-base sm:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}
