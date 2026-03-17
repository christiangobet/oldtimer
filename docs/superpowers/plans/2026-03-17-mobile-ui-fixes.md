# Mobile & Desktop UI Fixes Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 12 UI/UX issues identified during design review, prioritising mobile navigation and hero overflow.

**Architecture:** Targeted edits to existing components — no new pages or routes. One new client component (MobileMenu) for the hamburger nav. All other changes are CSS/className tweaks within existing files.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript

---

## Task 1: Fix hero heading + eyebrow overflow on mobile

**Files:**
- Modify: `components/sections/hero-section.tsx`

- [ ] Change `h1` from `text-5xl` to `text-[2.4rem] sm:text-5xl lg:text-7xl`
- [ ] Add `truncate` (or `break-words`) on the eyebrow `<p>` to prevent clipping
- [ ] Verify by resizing browser to 375px

---

## Task 2: Fix mobile header — CTA button clipping

**Files:**
- Modify: `components/ui/site-header.tsx`

- [ ] Wrap `<OutlineButton>` in `<div className="hidden sm:block">` instead of passing `hidden sm:inline-flex` as className (avoids base-class Tailwind conflict)

---

## Task 3: Add mobile hamburger menu

**Files:**
- Create: `components/ui/mobile-menu.tsx` (client component)
- Modify: `components/ui/site-header.tsx`

- [ ] Create `MobileMenu` client component with:
  - Hamburger button (`md:hidden`) with open/close state
  - Full-width slide-down panel with nav links + CTA
  - Each link click closes the menu
- [ ] Import and render `MobileMenu` in `SiteHeader` inside the right-side `<div>`
- [ ] Ensure hamburger is only visible on `< md` breakpoint

---

## Task 4: Fix section spacing

**Files:**
- Modify: `app/globals.css`

- [ ] Change `.section-padding` from `clamp(4rem, 8vw, 8rem)` to `clamp(2.5rem, 5vw, 5rem)`

---

## Task 5: Fix form field visibility

**Files:**
- Modify: `components/request-form.tsx`

- [ ] Replace `bg-black/20` with `bg-white/6` on all three field elements (input, select, textarea)
- [ ] Add a subtle `hover:border-accent/40 focus:border-accent/60 transition` to improve interactivity feel

---

## Task 6: Fix form submit button layout

**Files:**
- Modify: `components/request-form.tsx`

- [ ] Change the footer `<div>` from `flex-col gap-4 sm:flex-row sm:items-center sm:justify-between` to `flex flex-col gap-4`
- [ ] Make the submit button `w-full` so it spans the full form width on all breakpoints

---

## Task 7: Style select elements with custom chevron

**Files:**
- Modify: `components/request-form.tsx`

- [ ] Add `appearance-none cursor-pointer` to `<select>` className
- [ ] Wrap each `<select>` in a `relative` div with an absolutely-positioned SVG chevron

---

## Task 8: Add autocomplete attributes

**Files:**
- Modify: `components/request-form.tsx`

- [ ] Add `autoComplete="name"` to name input
- [ ] Add `autoComplete="email"` to email input

---

## Task 9: Platform card hover affordance

**Files:**
- Modify: `components/sections/platforms-section.tsx`

- [ ] Add `cursor-pointer` to `<article>`
- [ ] Add `hover:border-accent/40 transition-colors duration-300` to `<article>`

---

## Task 10: StatPill visual weight

**Files:**
- Modify: `components/ui/stat-pill.tsx`

- [ ] Change value from `text-2xl` to `text-3xl sm:text-4xl`
- [ ] Add `font-semibold` tracking improvement for numbers

---

## Task 11: Footer improvement

**Files:**
- Modify: `app/[locale]/layout.tsx` or whichever file renders the footer

- [ ] Add a brief contact/trust line above the footer nav (e.g. a simple paragraph with email or tagline)

---

## Task 12: Commit all fixes

- [ ] `git add -p` and commit with message `fix: mobile nav, hero overflow, form UX, spacing and polish`
