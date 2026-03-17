"use client";

import { useEffect, useState } from "react";
import { getAlternateLocale, type Locale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

type LanguageToggleProps = {
  locale: Locale;
  hash?: string;
  activeLabel?: string;
  inactiveLabel?: string;
};

const localeLabels: Record<Locale, string> = {
  de: "German",
  en: "English",
};

export function LanguageToggle({
  locale,
  hash,
  activeLabel,
  inactiveLabel,
}: LanguageToggleProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState(hash ?? "");
  const alternateLocale = getAlternateLocale(locale);
  const alternatePath = getAlternatePathname(pathname, locale, alternateLocale);
  const href = `${alternatePath}${currentHash}`;

  useEffect(() => {
    if (hash !== undefined) {
      setCurrentHash(hash);
      return;
    }

    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [hash]);

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-black/20 p-1">
      <span
        aria-current="page"
        className="inline-flex min-h-9 items-center rounded-full bg-accent px-3 text-xs font-semibold uppercase tracking-[0.22em] text-black"
      >
        {getLocaleBadge(locale)}
        <span className="sr-only">{activeLabel ?? localeLabels[locale]}</span>
      </span>
      <a
        href={href}
        aria-label={inactiveLabel ?? localeLabels[alternateLocale]}
        className="inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted transition hover:text-foreground"
      >
        {getLocaleBadge(alternateLocale)}
      </a>
    </div>
  );
}

function getAlternatePathname(pathname: string, locale: Locale, alternateLocale: Locale) {
  if (!pathname) {
    return `/${alternateLocale}`;
  }

  const localizedPath = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${alternateLocale}`);
  return localizedPath === pathname ? `/${alternateLocale}` : localizedPath;
}

function getLocaleBadge(locale: Locale) {
  return locale.toUpperCase();
}
