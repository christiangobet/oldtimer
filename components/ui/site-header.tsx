import { OutlineButton } from "@/components/ui/outline-button";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { MobileMenu } from "@/components/ui/mobile-menu";
import type { Locale } from "@/lib/i18n";
import type { NavigationLink, SiteContent } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
  navigationLinks: readonly NavigationLink[];
  ctaLabel: SiteContent["header"]["ctaLabel"];
  languageToggle: SiteContent["languageToggle"];
};

export function SiteHeader({
  locale,
  navigationLinks,
  ctaLabel,
  languageToggle,
}: SiteHeaderProps) {
  return (
    <header className="section-shell absolute inset-x-0 top-0 z-30 pt-6">
      <div className="surface-panel flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-2xl tracking-[0.12em] text-foreground">
          OldPart Precision
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.22em] text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle
            locale={locale}
            activeLabel={languageToggle.activeLabel}
            inactiveLabel={languageToggle.inactiveLabel}
          />
          <div className="hidden sm:block">
            <OutlineButton href="#request">{ctaLabel}</OutlineButton>
          </div>
          <MobileMenu navigationLinks={navigationLinks} ctaLabel={ctaLabel} />
        </div>
      </div>
    </header>
  );
}
