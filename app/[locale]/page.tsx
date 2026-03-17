import { getSiteContent } from "@/lib/site";
import { isSupportedLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <main className="section-shell py-24">
      <div className="surface-panel rounded-[2rem] p-8 sm:p-12">
        <p className="section-label">{content.hero.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] tracking-[0.02em] text-foreground sm:text-6xl lg:text-7xl">
          {content.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {content.hero.description}
        </p>
      </div>
    </main>
  );
}
