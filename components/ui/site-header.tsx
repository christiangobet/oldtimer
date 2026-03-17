import { navigationLinks } from "@/lib/site";
import { OutlineButton } from "@/components/ui/outline-button";

export function SiteHeader() {
  return (
    <header className="section-shell absolute inset-x-0 top-0 z-30 pt-6">
      <div className="surface-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
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
        <OutlineButton href="#request" className="hidden sm:inline-flex">
          Start Inquiry
        </OutlineButton>
      </div>
    </header>
  );
}
