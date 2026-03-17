# OldPart Precision Bilingual Site Design

**Date:** 2026-03-17
**Status:** Approved

## Goal

Extend the existing landing site so it works in both German and English, with German as the primary experience and English as a fully translated alternate route.

## Product Decision

The site should use explicit localized routes:

- `/de` for German
- `/en` for English
- `/` redirects to `/de`

Each localized page should include a visible language toggle so visitors can switch languages without leaving the current page flow.

## Why This Approach

This route-based structure is the best fit for the current site because:

- German remains the clear primary language
- each language gets a shareable URL
- future SEO work has a clean foundation
- metadata can be localized properly
- the toggle can switch between equivalent pages and anchors

Compared with a client-only text swap, this avoids hiding content behind JavaScript state and keeps the site ready for later multilingual expansion.

## Scope

Included:

- localized routes for German and English
- root redirect to German
- visible language toggle in the shared header
- full translation of page copy, metadata, navigation, form labels, CTA labels, and footer
- locale-aware request form text and confirmation state
- locale-aware metadata and language alternates

Excluded:

- automatic browser-language detection
- CMS-backed translation workflows
- additional languages beyond German and English
- locale-specific form submission backends

## Routing Design

### Primary Routes

- `/de` renders the German landing page
- `/en` renders the English landing page
- `/` redirects to `/de`

### Anchor Behavior

The page remains a single anchored landing experience in each language. The language toggle should preserve the current anchor when possible:

- `/de#platforms` switches to `/en#platforms`
- `/en#request` switches to `/de#request`

If no anchor is present, the toggle should simply switch between `/de` and `/en`.

## Content Architecture

The current content should move from a single flat content file to a locale-driven structure.

Recommended shape:

- shared structural keys for the landing page
- one German dataset
- one English dataset
- one helper for reading content by locale

This keeps the section components shared while moving all user-facing strings into locale content objects.

The localized content layer should include:

- site metadata
- navigation labels
- hero copy
- metrics labels
- process steps
- supported platform copy
- example parts copy
- sustainability bullets
- request form labels, placeholders, button labels, and success messages
- footer copy
- language-toggle labels

## Toggle Design

The language toggle should appear in the header and feel like a lightweight utility, not a dominant CTA.

Behavior:

- both languages are always visible
- the active language is visually emphasized
- clicking the inactive language navigates to the matching localized route
- current anchor is preserved in the destination URL

Tone:

- compact
- clear
- premium
- consistent with the existing editorial header styling

## Page Architecture

The site should stop treating `app/page.tsx` as the main content entry.

Recommended structure:

- `app/page.tsx` handles redirect to `/de`
- `app/[locale]/page.tsx` renders the localized landing page
- shared sections stay in `components/sections`
- shared UI primitives stay in `components/ui`
- content resolution happens before section rendering, so sections receive localized data instead of importing a global singleton

This minimizes duplication while keeping the routing model explicit.

## Metadata And SEO

Each localized route should have its own metadata:

- German title/description for `/de`
- English title/description for `/en`

The implementation should also expose alternates between the two languages so the app is ready for proper multilingual indexing later.

German is the primary experience, so the root redirect should always send visitors to `/de`.

## Form Behavior

The request form remains frontend-only, but all visible text should be localized:

- field labels
- select labels
- option text
- helper copy
- validation messages
- submit button label
- mock success confirmation

The form behavior itself should remain unchanged unless localization requires minor structural cleanup.

## Accessibility

The bilingual setup should remain accessible:

- toggle labels must be explicit and keyboard accessible
- current language state should be visually obvious
- translations should not rely on icons alone
- landmarks, heading hierarchy, and semantic form labeling should remain intact

## Risks And Mitigations

- Risk: copy scattered across many components
  - Mitigation: centralize all user-facing strings in locale content modules
- Risk: duplicated page code between `/de` and `/en`
  - Mitigation: use one shared localized page renderer
- Risk: broken anchor switching in the language toggle
  - Mitigation: build the toggle around pathname plus existing hash preservation
- Risk: partial translation leading to mixed-language UI
  - Mitigation: define complete locale objects and type them strictly
- Risk: stale cached platform cards or mixed route output during development
  - Mitigation: keep route rendering deterministic and verify both localized routes directly in browser checks

## Success Criteria

The bilingual version is successful when:

- `/` redirects to `/de`
- `/de` renders a complete German landing page
- `/en` renders a complete English landing page
- the language toggle switches between both versions cleanly
- major section anchors continue to work in both languages
- the request form is fully localized in both languages
- metadata differs correctly between German and English
- the implementation keeps one shared structural codepath rather than duplicating the whole page
