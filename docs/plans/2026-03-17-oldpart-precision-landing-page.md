# OldPart Precision Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a `Next.js` single-page landing site for OldPart Precision with premium editorial styling, free commercial-safe imagery, subtle animation, and a frontend-only request form.

**Architecture:** Start by initializing a clean `Next.js` App Router project in the empty workspace, then layer in a small design system, homepage sections, motion primitives, and final responsive polish. Keep the implementation intentionally narrow: one route, reusable section components, optimized image handling, and light client-side interactivity only where needed.

**Tech Stack:** `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, `Framer Motion`, `next/font`, `next/image`, `ESLint`

---

### Task 1: Initialize The Project Foundation

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `public/`
- Create: `.gitignore`
- Create: `README.md`

**Step 1: Initialize a git repository**

Run: `git init`
Expected: repository initialized in `/Users/christiangobet/CODEX/oldtimer/.git`

**Step 2: Scaffold the Next.js app with TypeScript, App Router, ESLint, and Tailwind**

Run: `pnpm create next-app@latest . --ts --eslint --app --src-dir false --use-pnpm --import-alias "@/*"`
Expected: baseline Next.js project files are created in the current workspace

**Step 3: Install the motion library**

Run: `pnpm add framer-motion`
Expected: `package.json` includes `framer-motion`

**Step 4: Verify the scaffolded app can lint**

Run: `pnpm lint`
Expected: lint completes successfully with no fatal errors

**Step 5: Commit the clean scaffold**

```bash
git add .
git commit -m "chore: scaffold next landing page app"
```

### Task 2: Define Tokens, Fonts, And Base Layout Rules

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `lib/site.ts`

**Step 1: Write the failing visual contract as a checklist in the design doc**

Add explicit implementation notes to `docs/plans/2026-03-17-oldpart-precision-design.md` covering:
- dark palette tokens
- typography roles
- spacing scale
- animation constraints

Expected: the design doc becomes the source of truth for styling decisions

**Step 2: Implement root-level metadata, fonts, and body classes**

Update `app/layout.tsx` to:
- load a premium display font and a clean body font with `next/font`
- apply semantic metadata
- set body classes for the dark experience baseline

Expected: the app shell defines the brand tone before section work begins

**Step 3: Implement CSS variables and global utility styles**

Update `app/globals.css` to include:

```css
:root {
  --background: #070707;
  --surface: #121212;
  --surface-strong: #171717;
  --foreground: #f2eee6;
  --muted: #a79f90;
  --accent: #c7a86a;
  --border: rgba(199, 168, 106, 0.18);
}
```

Also add:
- global selection styling
- section rhythm helpers
- subtle grid/background textures
- focus-visible rules

**Step 4: Run lint**

Run: `pnpm lint`
Expected: PASS

**Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx lib/site.ts docs/plans/2026-03-17-oldpart-precision-design.md
git commit -m "feat: add brand tokens and global shell"
```

### Task 3: Add Safe Image Content And Site Data

**Files:**
- Create: `public/images/hero-car.jpg`
- Create: `public/images/machining-detail.jpg`
- Create: `public/images/platform-porsche.jpg`
- Create: `public/images/platform-mercedes.jpg`
- Create: `public/images/platform-bmw.jpg`
- Create: `public/images/platform-alfa.jpg`
- Create: `public/images/example-part-1.jpg`
- Create: `public/images/example-part-2.jpg`
- Create: `public/images/sustainability-workshop.jpg`
- Modify: `lib/site.ts`
- Modify: `README.md`

**Step 1: Source free commercial-safe imagery**

Download images from sources with commercial-safe licenses such as `Unsplash`, `Pexels`, or `Pixabay`.
Expected: each chosen image clearly matches one section of the page and is stored under `public/images/`

**Step 2: Record attribution/source notes in the README**

Add a section in `README.md` documenting:
- image file name
- source URL
- license/source note

Expected: future edits can trace image provenance

**Step 3: Build structured site content data**

Create `lib/site.ts` with arrays for:
- navigation links
- metrics
- process steps
- supported platforms
- example parts
- sustainability bullets
- form options

Expected: page content is data-driven and easy to tune without editing section markup

**Step 4: Run lint**

Run: `pnpm lint`
Expected: PASS

**Step 5: Commit**

```bash
git add public/images lib/site.ts README.md
git commit -m "feat: add curated imagery and landing page content data"
```

### Task 4: Build Reusable Primitives And Motion Helpers

**Files:**
- Create: `components/ui/section-heading.tsx`
- Create: `components/ui/outline-button.tsx`
- Create: `components/ui/stat-pill.tsx`
- Create: `components/ui/reveal.tsx`
- Create: `components/ui/grain-overlay.tsx`
- Create: `components/ui/site-header.tsx`

**Step 1: Write the failing test for reduced-motion-safe reveal behavior**

Create `components/ui/reveal.tsx` with a TODO comment and then add a test file:
- Create: `__tests__/reveal.test.tsx`

Test sketch:

```tsx
import { render, screen } from "@testing-library/react";
import { Reveal } from "@/components/ui/reveal";

it("renders children without hiding content for reduced motion users", () => {
  render(<Reveal>Visible content</Reveal>);
  expect(screen.getByText("Visible content")).toBeInTheDocument();
});
```

**Step 2: Install test dependencies**

Run: `pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom`
Expected: test tooling is available for component verification

**Step 3: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/reveal.test.tsx`
Expected: FAIL because `Reveal` is not implemented yet

**Step 4: Implement the minimal UI primitives and reveal helper**

Create reusable components for:
- section headings
- bordered buttons
- stat pills
- motion wrapper with reduced-motion fallback
- brand header

Expected: later sections can compose these primitives instead of duplicating structure

**Step 5: Run tests and lint**

Run: `pnpm vitest run __tests__/reveal.test.tsx`
Expected: PASS

Run: `pnpm lint`
Expected: PASS

**Step 6: Commit**

```bash
git add components __tests__ package.json pnpm-lock.yaml
git commit -m "feat: add reusable landing page primitives"
```

### Task 5: Assemble The Hero, Metrics, And Process Sections

**Files:**
- Create: `components/sections/hero-section.tsx`
- Create: `components/sections/metrics-strip.tsx`
- Create: `components/sections/process-section.tsx`
- Modify: `app/page.tsx`

**Step 1: Write the failing test for hero CTA presence**

Create:
- `__tests__/home-hero.test.tsx`

Test sketch:

```tsx
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

it("shows the primary quote request CTA", () => {
  render(<HomePage />);
  expect(screen.getByRole("link", { name: /request a quote/i })).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/home-hero.test.tsx`
Expected: FAIL because the section structure is not implemented yet

**Step 3: Build the first three homepage sections**

Implement:
- hero headline, copy, and image composition
- proof metrics strip
- process section with numbered cards

Expected: the page establishes the premium tone and storytelling rhythm

**Step 4: Run tests and lint**

Run: `pnpm vitest run __tests__/home-hero.test.tsx`
Expected: PASS

Run: `pnpm lint`
Expected: PASS

**Step 5: Manually verify in the browser**

Run: `pnpm dev`
Expected: local app runs on `http://localhost:3000`

Check:
- hero feels premium above the fold
- metrics align cleanly
- process cards animate subtly

**Step 6: Commit**

```bash
git add app/page.tsx components/sections __tests__
git commit -m "feat: build hero and process storytelling sections"
```

### Task 6: Build The Platforms And Example Parts Sections

**Files:**
- Create: `components/sections/platforms-section.tsx`
- Create: `components/sections/examples-section.tsx`
- Modify: `app/page.tsx`

**Step 1: Write the failing test for platform card rendering**

Create:
- `__tests__/platforms-section.test.tsx`

Test sketch:

```tsx
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

it("renders supported platform cards", () => {
  render(<HomePage />);
  expect(screen.getByText(/porsche/i)).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/platforms-section.test.tsx`
Expected: FAIL because the card sections are not implemented yet

**Step 3: Implement both proof sections**

Build:
- marque/platform card grid
- example parts showcase
- hover and reveal treatments

Expected: the middle of the page adds credibility and visual richness

**Step 4: Run tests and lint**

Run: `pnpm vitest run __tests__/platforms-section.test.tsx`
Expected: PASS

Run: `pnpm lint`
Expected: PASS

**Step 5: Commit**

```bash
git add app/page.tsx components/sections __tests__
git commit -m "feat: add platform and example parts sections"
```

### Task 7: Build The Request Form And Sustainability Close

**Files:**
- Create: `components/sections/request-section.tsx`
- Create: `components/sections/sustainability-section.tsx`
- Create: `components/request-form.tsx`
- Modify: `app/page.tsx`

**Step 1: Write the failing test for form validation**

Create:
- `__tests__/request-form.test.tsx`

Test sketch:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { RequestForm } from "@/components/request-form";

it("shows required-field validation before mock submit success", async () => {
  render(<RequestForm />);
  fireEvent.click(screen.getByRole("button", { name: /submit request/i }));
  expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/request-form.test.tsx`
Expected: FAIL because the form is not implemented yet

**Step 3: Implement the form and closing section**

Build:
- request form with required-field validation
- inline mock success message
- sustainability close with persuasive content and strong imagery

Expected: the page ends with a clear CTA and value proposition

**Step 4: Run tests and lint**

Run: `pnpm vitest run __tests__/request-form.test.tsx`
Expected: PASS

Run: `pnpm lint`
Expected: PASS

**Step 5: Commit**

```bash
git add app/page.tsx components/sections components/request-form.tsx __tests__
git commit -m "feat: add quote request form and sustainability section"
```

### Task 8: Final Polish, Accessibility, And Production Verification

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `components/**/*.tsx`
- Modify: `README.md`

**Step 1: Refine motion, spacing, and mobile breakpoints**

Adjust:
- stacked mobile layouts
- image cropping and aspect ratios
- CTA spacing
- section reveal timing
- reduced-motion behavior

Expected: the page feels composed on small and large screens

**Step 2: Verify keyboard and focus behavior**

Check:
- header links
- CTA buttons
- all form controls

Expected: visible focus rings and logical tab order

**Step 3: Run full verification**

Run: `pnpm vitest run`
Expected: PASS

Run: `pnpm lint`
Expected: PASS

Run: `pnpm build`
Expected: PASS and production bundle generated successfully

**Step 4: Perform manual browser review**

Run: `pnpm dev`
Expected: local app available for desktop and mobile viewport checks

Review:
- overall premium feel
- image consistency
- motion restraint
- visual hierarchy
- form success/error states

**Step 5: Update README with local setup instructions**

Document:
- install command
- dev server command
- lint/test/build commands
- image attribution notes

**Step 6: Commit**

```bash
git add .
git commit -m "feat: finish oldpart precision landing page"
```
