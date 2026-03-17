import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isSupportedLocale } from "@/lib/i18n";
import { getSiteContent } from "@/lib/site";

type LocalizedLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Pick<LocalizedLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: {
      absolute: content.site.title,
    },
    description: content.site.description,
    applicationName: content.site.name,
    keywords: [...content.site.keywords],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
      },
    },
    openGraph: {
      title: content.site.title,
      description: content.site.description,
      siteName: content.site.name,
      locale: content.site.locale,
      type: "website",
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.site.title,
      description: content.site.description,
    },
  };
}

export default async function LocalizedLayout({
  children,
  params,
}: LocalizedLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return children;
}
