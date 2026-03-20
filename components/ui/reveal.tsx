"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

/**
 * Reveal — scroll-triggered entrance animation.
 *
 * Strategy:
 * 1. SSR / pre-hydration: renders a plain <div>, content fully visible.
 * 2. After hydration, elements already in the viewport stay visible (no animation).
 * 3. Elements below the fold are hidden immediately (no transition), then revealed
 *    with a CSS transition when they enter the viewport via IntersectionObserver.
 *
 * This eliminates the race condition where switching to a Framer Motion element with
 * `initial={{ opacity: 0 }}` leaves content invisible while waiting for isInView.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // true = fully visible (no animation), false = hidden, waiting to animate in
  const [visible, setVisible] = useState(true);
  // only apply transition after first reveal (prevents transition on initial hide)
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user preference — leave visible, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    // Already in viewport at hydration time — no animation needed
    if (rect.top < window.innerHeight) return;

    // Below the fold: hide instantly (no transition yet), then observe
    setVisible(false);

    let observer: IntersectionObserver | null = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Two rAFs: first ensures browser has painted the hidden state,
          // second triggers the CSS transition from hidden → visible.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setAnimate(true);
              setVisible(true);
            });
          });
          observer?.disconnect();
          observer = null;
        }
      },
      { rootMargin: "0px 0px 120px 0px" }
    );
    observer.observe(el);

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        animate || visible
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : `translateY(${distance}px)`,
              transition: animate
                ? `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`
                : "none",
            }
          : {
              opacity: 0,
              transform: `translateY(${distance}px)`,
            }
      }
    >
      {children}
    </div>
  );
}
