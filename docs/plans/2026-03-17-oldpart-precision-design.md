# OldPart Precision Landing Page Design

**Date:** 2026-03-17
**Status:** Approved

## Goal

Create a visually striking, premium landing page for a heritage automotive precision-parts brand. The site should feel dark, engineered, cinematic, and trustworthy, using original layout decisions inspired by the reference image rather than recreating it 1:1.

## Product Scope

This v1 is a frontend-only marketing site built as a single-page `Next.js` experience.

Included:
- Homepage with anchored sections
- Premium visual design system
- Free, commercially safe imagery of vintage cars, machining, and workshop details
- Refined motion and scroll reveals
- Styled quote/request form with client-side validation and mock success state
- Responsive layout for mobile, tablet, and desktop

Excluded:
- Real backend submission flow
- CMS integration
- Admin tools
- Authentication
- Inventory or searchable catalog features

## Experience Principles

- Feel expensive and intentional rather than busy
- Use motion to reinforce hierarchy and atmosphere, not as decoration
- Balance editorial storytelling with clear conversion paths
- Preserve accessibility, performance, and responsive clarity
- Keep the page original while staying in the same visual family as the inspiration

## Information Architecture

The homepage should include the following sections in this order:

1. Header
2. Hero
3. Metrics strip
4. How it works
5. Supported marques / platforms
6. Example parts / proof of craftsmanship
7. Request a part
8. Sustainability / repair message
9. Footer

## Section Design

### Header

- Compact horizontal layout
- Wordmark at left
- Anchor-based navigation for major sections
- Primary CTA at right
- Mobile navigation simplified to protect hero impact

### Hero

- Oversized editorial headline
- Short supporting copy
- Primary and secondary CTA pair
- Large image composition with layered or masked vintage-car and workshop photography
- Immediate premium feel above the fold

### Metrics Strip

- Slim horizontal proof band below hero
- Three to four metrics with short labels
- High contrast and compact rhythm

### How It Works

- Split layout with editorial copy and a numbered process list
- Steps should feel structured and technical
- Subtle hover or reveal behavior for cards

### Supported Platforms

- Premium card grid highlighting iconic marques or platforms
- Each card combines imagery with short metadata
- The section should feel like curated expertise rather than a database

### Example Parts

- Smaller proof cards that showcase component names and quick production notes
- Reinforces credibility and workshop precision

### Request A Part

- Split composition with bold brand statement on one side and polished form shell on the other
- Form remains frontend-only in v1
- Submission produces inline validation and a graceful mock confirmation state

### Sustainability

- Calm, persuasive close around repair over replacement
- One strong supporting image plus concise benefit list
- Tone should be confident, not preachy

### Footer

- Minimal navigation and brand reinforcement
- Low visual noise

## Visual System

### Tone

Dark, precise, tactile, and elegant. The site should feel like a blend of heritage automotive culture and modern precision manufacturing.

### Color

- Base: near-black / charcoal
- Text: warm ivory and muted grays
- Accent: restrained brass or machined-gold highlights
- Surfaces: graphite panels with subtle contrast

The accent should suggest crafted metal, not flashy luxury branding.

### Typography

- Display type with character for large statements
- Clean sans serif for body text and controls
- Strong hierarchy with oversized hero copy, disciplined section labels, and restrained supporting text

### Layout

- Generous spacing
- Asymmetrical image placement
- Crisp borders and card frames
- Technical divider lines and subtle paneling
- Large negative space to maintain composure

### Imagery

Use free, commercially safe images that align with the brand world:
- Vintage/classic cars
- CNC or machining details
- Metal part closeups
- Workshop tools and precision surfaces

All imagery should receive a consistent treatment:
- Controlled contrast
- Unified cropping
- Dark overlays where needed
- Cohesive tonal grading

## Motion System

Motion should be restrained and premium:

- Hero text and metrics reveal on load
- Scroll-triggered fade/rise reveals for cards and sections
- Slow parallax or drift on selected image panels
- Refined CTA hover transitions
- One signature animated detail such as a scanning line, grid sweep, or ambient technical glow

All motion must respect `prefers-reduced-motion`.

## Content Strategy

The copy should position the brand as a specialist in difficult-to-source heritage vehicle components. It should sound confident, precise, and understated.

Key content themes:
- Heritage preservation
- Engineering rigor
- Small-batch or custom production
- Faster route from broken part to usable replacement
- Repair over replacement

## Form Behavior

The quote form should include:
- Name
- Email
- Vehicle / platform
- Year / manufacture details
- Part description

Behavior:
- Client-side required-field validation
- Clear focus and error states
- Mock success state after submit
- No fake backend language that implies real processing

## Accessibility And Performance

### Accessibility

- WCAG AA contrast for text and UI controls
- Visible keyboard focus styles
- Semantic landmarks and headings
- Meaningful image alt text
- Motion never required for understanding

### Performance

- Optimize image delivery with `next/image`
- Keep scripts lightweight
- Prefer transform/opacity animations
- Preserve above-the-fold responsiveness and fast perceived load

## Risks And Mitigations

- Risk: visual incoherence from mixed imagery
  - Mitigation: consistent art direction and overlays
- Risk: over-animated or heavy page
  - Mitigation: limit motion to a few meaningful patterns
- Risk: mobile layout feels crowded
  - Mitigation: simplify image compositions and reduce simultaneous visual elements on smaller screens
- Risk: frontend-only form feels broken
  - Mitigation: use an explicit mock confirmation state

## Success Criteria

The final page should:
- Feel premium and memorable on first load
- Match the desired dark automotive-machining aesthetic
- Look polished on desktop and mobile
- Use safe, free imagery without copyright concerns
- Provide a clear request/quote CTA
- Maintain strong usability despite the rich presentation
