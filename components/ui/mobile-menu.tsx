"use client";

import { useState, useEffect } from "react";
import type { NavigationLink } from "@/lib/site";

type MobileMenuProps = {
  navigationLinks: readonly NavigationLink[];
  ctaLabel: string;
};

export function MobileMenu({ navigationLinks, ctaLabel }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change / hash navigation, or Escape key
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("hashchange", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] rounded-full border border-border transition hover:border-accent/50"
      >
        <span
          className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
        />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-down panel */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed inset-x-4 top-20 z-50 overflow-hidden rounded-[1.5rem] border border-border shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"
        }`}
        style={{
          background: "linear-gradient(180deg, rgba(18,18,18,0.98), rgba(7,7,7,0.98))",
          backdropFilter: "blur(24px)",
        }}
      >
        <ul className="flex flex-col divide-y divide-border/40">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer px-7 py-5 text-sm uppercase tracking-[0.22em] text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-4 pt-3">
          <a
            href="#request"
            onClick={() => setIsOpen(false)}
            className="flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-accent text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110"
          >
            {ctaLabel}
          </a>
        </div>
      </nav>
    </div>
  );
}
