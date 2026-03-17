import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { isSupportedLocale } from "@/lib/i18n";

type LocalizedLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

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
