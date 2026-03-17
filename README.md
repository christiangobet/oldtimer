## OldPart Precision

Localized `Next.js` landing page for a heritage automotive precision-parts brand.

## Local Setup

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

## Routes

- `/` redirects to `/de`
- `/de` is the primary German landing page
- `/en` is the English landing page

## Localized Content

- Shared route handling lives under `app/[locale]/`
- Localized copy lives in `lib/content/de.ts` and `lib/content/en.ts`
- Locale helpers and lookup logic live in `lib/i18n.ts` and `lib/site.ts`

Run the verification commands:

```bash
pnpm vitest run
pnpm lint
pnpm build
```

## Image Attribution

Imagery in `public/images/` comes from a mix of Pexels and Wikimedia Commons. Verify the source-page license terms before redistribution outside this project.

| File | Source URL | License / Source Note |
| --- | --- | --- |
| `hero-car.jpg` | `https://images.pexels.com/photos/32604009/pexels-photo-32604009.jpeg?cs=srgb&dl=pexels-egeardaphotos-2148533277-32604009.jpg&fm=jpg` | Pexels free-to-use image download |
| `machining-detail.jpg` | `https://images.pexels.com/photos/8956313/pexels-photo-8956313.jpeg?cs=srgb&fm=jpg` | Pexels free-to-use image download |
| `platform-porsche-heritage.jpg` | `https://commons.wikimedia.org/wiki/File:1955_Porsche_356.jpg` | Wikimedia Commons, CC0 |
| `platform-mercedes-heritage.jpg` | `https://commons.wikimedia.org/wiki/File:Mercedes_W123.jpg` | Wikimedia Commons, CC0 |
| `platform-bmw-heritage.jpg` | `https://commons.wikimedia.org/wiki/File:1973_BMW_2002.jpg` | Wikimedia Commons, CC0 |
| `platform-alfa-heritage.jpg` | `https://www.pexels.com/photo/red-vintage-car-outdoors-31024744/` | Pexels page source |
| `example-part-1.jpg` | `https://www.pexels.com/photo/a-person-measuring-a-rail-36003972/` | Pexels page source |
| `example-part-2.jpg` | `https://commons.wikimedia.org/wiki/File:CNC_milling_machine.jpg` | Wikimedia Commons, CC0 |
| `sustainability-workshop.jpg` | `https://commons.wikimedia.org/wiki/File:Lathe_workshop.jpg` | Wikimedia Commons, CC0 |
