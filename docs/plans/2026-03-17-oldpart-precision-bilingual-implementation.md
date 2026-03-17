# OldPart Precision Bilingual Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add German and English versions of the landing site using localized routes, a header language toggle, and a shared content-driven page architecture.

**Architecture:** Replace the single-route landing page with an explicit localized route structure built around `/de` and `/en`, while keeping one shared page composition. Move all user-facing copy into typed locale content objects so shared sections and form components can render per-locale data without duplicating layout code.

**Tech Stack:** `Next.js` App Router, `React`, `TypeScript`, `Tailwind CSS`, `Vitest`, `Testing Library`

---

### Task 1: Add Locale Types And Content Modules

**Files:**
- Create: `lib/i18n.ts`
- Create: `lib/content/en.ts`
- Create: `lib/content/de.ts`
- Modify: `lib/site.ts`
- Test: `__tests__/locale-content.test.ts`

**Step 1: Write the failing test for locale content retrieval**

Create `__tests__/locale-content.test.ts`:

```tsx
import { getSiteContent } from "@/lib/site";

it("returns German content for de and English content for en", () => {
  expect(getSiteContent("de").navigationLinks[0].label).toBe("Ablauf");
  expect(getSiteContent("en").navigationLinks[0].label).toBe("Process");
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/locale-content.test.ts`
Expected: FAIL because locale-aware content helpers do not exist yet

**Step 3: Implement the minimal locale content structure**

Create:
- `lib/i18n.ts` with the locale union, supported locale list, and locale helpers
- `lib/content/en.ts` with the full English content object
- `lib/content/de.ts` with the full German content object

Update `lib/site.ts` to export:
- shared content types
- `getSiteContent(locale)`
- shared fallbacks only if strictly necessary

Expected: all user-facing copy lives in locale objects rather than a single global content export

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/locale-content.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add lib/i18n.ts lib/content/en.ts lib/content/de.ts lib/site.ts __tests__/locale-content.test.ts
git commit -m "feat: add locale-aware content modules"
```

### Task 2: Add Localized Routing And Root Redirect

**Files:**
- Modify: `app/page.tsx`
- Create: `app/[locale]/page.tsx`
- Create: `app/[locale]/layout.tsx`
- Test: `__tests__/localized-routing.test.tsx`

**Step 1: Write the failing test for root redirect and localized rendering**

Create `__tests__/localized-routing.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import LocalizedPage from "@/app/[locale]/page";

it("renders German copy for the de route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "de" }) });
  render(page);
  expect(screen.getByText(/präzise gefertigte ersatzteile/i)).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/localized-routing.test.tsx`
Expected: FAIL because localized route files do not exist yet

**Step 3: Implement the localized route shell**

Update `app/page.tsx` to redirect to `/de`.

Create:
- `app/[locale]/page.tsx` as the localized landing route
- `app/[locale]/layout.tsx` if needed for locale validation and metadata helpers

Expected:
- `/` redirects to `/de`
- localized page rendering is driven by a `locale` param

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/localized-routing.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add app/page.tsx app/[locale]/page.tsx app/[locale]/layout.tsx __tests__/localized-routing.test.tsx
git commit -m "feat: add localized landing page routes"
```

### Task 3: Refactor Shared Sections To Accept Localized Content

**Files:**
- Modify: `components/sections/hero-section.tsx`
- Modify: `components/sections/metrics-strip.tsx`
- Modify: `components/sections/process-section.tsx`
- Modify: `components/sections/platforms-section.tsx`
- Modify: `components/sections/examples-section.tsx`
- Modify: `components/sections/request-section.tsx`
- Modify: `components/sections/sustainability-section.tsx`
- Modify: `app/[locale]/page.tsx`
- Test: `__tests__/localized-homepage.test.tsx`

**Step 1: Write the failing test for section-level localized copy**

Create `__tests__/localized-homepage.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import LocalizedPage from "@/app/[locale]/page";

it("renders English section copy on the en route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "en" }) });
  render(page);
  expect(screen.getByRole("heading", { name: /precision-made replacements/i })).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/localized-homepage.test.tsx`
Expected: FAIL because sections still import global content directly

**Step 3: Implement the shared localized page composition**

Refactor the shared sections so they receive only the content they need via props instead of importing global copy directly.

Update `app/[locale]/page.tsx` to:
- resolve `content = getSiteContent(locale)`
- pass localized data into each section
- render localized footer copy and localized navigation labels

Expected: one shared layout path supports both languages without duplicated markup

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/localized-homepage.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/sections app/[locale]/page.tsx __tests__/localized-homepage.test.tsx
git commit -m "refactor: localize shared landing page sections"
```

### Task 4: Add The Header Language Toggle

**Files:**
- Modify: `components/ui/site-header.tsx`
- Modify: `lib/site.ts`
- Create: `components/ui/language-toggle.tsx`
- Test: `__tests__/language-toggle.test.tsx`

**Step 1: Write the failing test for alternate-route toggle links**

Create `__tests__/language-toggle.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { LanguageToggle } from "@/components/ui/language-toggle";

it("links from de to en while preserving the section anchor", () => {
  render(<LanguageToggle locale="de" hash="#platforms" />);
  expect(screen.getByRole("link", { name: /english/i })).toHaveAttribute("href", "/en#platforms");
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/language-toggle.test.tsx`
Expected: FAIL because the toggle component does not exist yet

**Step 3: Implement the toggle**

Create `components/ui/language-toggle.tsx` and update `components/ui/site-header.tsx` to render it.

Requirements:
- show `DE` and `EN`
- visually emphasize the active language
- link to the alternate locale
- preserve the current hash when it exists

Expected: the toggle appears in the header on localized pages

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/language-toggle.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/ui/site-header.tsx components/ui/language-toggle.tsx lib/site.ts __tests__/language-toggle.test.tsx
git commit -m "feat: add localized language toggle"
```

### Task 5: Localize The Request Form End-To-End

**Files:**
- Modify: `components/request-form.tsx`
- Modify: `components/sections/request-section.tsx`
- Modify: `lib/content/en.ts`
- Modify: `lib/content/de.ts`
- Test: `__tests__/request-form-localization.test.tsx`

**Step 1: Write the failing test for localized form labels**

Create `__tests__/request-form-localization.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { RequestForm } from "@/components/request-form";
import { getSiteContent } from "@/lib/site";

it("renders German form labels when given German content", () => {
  render(<RequestForm content={getSiteContent("de").requestForm} />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/fahrzeugplattform/i)).toBeInTheDocument();
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/request-form-localization.test.tsx`
Expected: FAIL because the form is not content-driven yet

**Step 3: Refactor the form to accept localized content**

Update the form so all visible copy comes from props:
- labels
- placeholders
- select prompts
- option labels
- submit button label
- validation messages
- mock success message

Expected: the form stays frontend-only, but becomes fully localizable

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/request-form-localization.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add components/request-form.tsx components/sections/request-section.tsx lib/content/en.ts lib/content/de.ts __tests__/request-form-localization.test.tsx
git commit -m "feat: localize request form content"
```

### Task 6: Add Locale-Specific Metadata And Alternates

**Files:**
- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/layout.tsx`
- Modify: `lib/content/en.ts`
- Modify: `lib/content/de.ts`
- Test: `__tests__/localized-metadata.test.ts`

**Step 1: Write the failing test for localized metadata**

Create `__tests__/localized-metadata.test.ts`:

```ts
import { getSiteContent } from "@/lib/site";

it("exposes different localized metadata for German and English", () => {
  expect(getSiteContent("de").site.title).not.toBe(getSiteContent("en").site.title);
});
```

**Step 2: Run the test to verify it fails**

Run: `pnpm vitest run __tests__/localized-metadata.test.ts`
Expected: FAIL because metadata is not locale-specific yet

**Step 3: Implement localized metadata generation**

Update the localized route layer to expose:
- German metadata for `/de`
- English metadata for `/en`
- alternates between both localized routes

Expected: metadata reflects the active language cleanly

**Step 4: Run tests**

Run: `pnpm vitest run __tests__/localized-metadata.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add app/[locale]/page.tsx app/[locale]/layout.tsx lib/content/en.ts lib/content/de.ts __tests__/localized-metadata.test.ts
git commit -m "feat: add localized metadata and alternates"
```

### Task 7: Verify The Full Bilingual Experience

**Files:**
- Modify: `README.md`

**Step 1: Run the full test suite**

Run: `pnpm vitest run`
Expected: PASS

**Step 2: Run lint**

Run: `pnpm lint`
Expected: PASS

**Step 3: Run the production build**

Run: `pnpm build`
Expected: PASS

**Step 4: Update project documentation**

Document the bilingual routing in `README.md`, including:
- `/de` and `/en` routes
- `/` redirect behavior
- where localized content lives

Expected: future contributors can find and update translated content safely

**Step 5: Commit**

```bash
git add README.md
git commit -m "docs: document bilingual route structure"
```
