export const siteConfig = {
  name: "OldPart Precision",
  title: "OldPart Precision | Heritage Vehicle Parts, Rebuilt Precisely",
  description:
    "OldPart Precision helps collectors and restoration shops replace difficult-to-source heritage vehicle parts with precise, workshop-ready craftsmanship.",
  locale: "en_US",
  keywords: [
    "heritage automotive parts",
    "classic car machining",
    "precision remanufacturing",
    "restoration workshop",
    "small-batch vehicle components",
  ],
} as const;

export const navigationLinks = [
  { label: "Process", href: "#process" },
  { label: "Platforms", href: "#platforms" },
  { label: "Examples", href: "#examples" },
  { label: "Request", href: "#request" },
] as const;

export const metrics = [
  { value: "72h", label: "Initial review window" },
  { value: "40+", label: "Years of marque coverage" },
  { value: "<0.05mm", label: "Tolerance target for critical parts" },
  { value: "1:1", label: "Reverse-engineered replacement path" },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Capture the failed part",
    description:
      "Share reference photos, dimensions, and workshop notes so we can assess geometry before tooling starts.",
  },
  {
    number: "02",
    title: "Validate fit and manufacture",
    description:
      "We compare legacy references, confirm the right material path, and machine a precise low-volume replacement strategy.",
  },
  {
    number: "03",
    title: "Return a workshop-ready component",
    description:
      "Your rebuilt part arrives documented, finish-checked, and ready for the next stage of restoration.",
  },
] as const;

export const supportedPlatforms = [
  {
    name: "Porsche",
    years: "356 to air-cooled 911",
    summary: "Small-batch reproduction support for iconic rear-engined platforms.",
    image: "/images/platform-porsche.jpg",
    alt: "Classic Porsche parked indoors with race number livery.",
  },
  {
    name: "Mercedes-Benz",
    years: "Pagoda to W123",
    summary: "Precision metalwork for touring coupes, saloons, and long-life restorations.",
    image: "/images/platform-mercedes.jpg",
    alt: "Classic Mercedes-Benz parked on a city street.",
  },
  {
    name: "BMW",
    years: "Neue Klasse to E24",
    summary: "Measured replacement paths for rare trim supports, brackets, and housings.",
    image: "/images/platform-bmw.jpg",
    alt: "Classic BMW coupe photographed in a studio-like setting.",
  },
  {
    name: "Alfa Romeo",
    years: "Giulia to Spider",
    summary: "Elegant Italian platforms supported with faithful geometry and restrained finishing.",
    image: "/images/platform-alfa.jpg",
    alt: "Red vintage Alfa Romeo outdoors near a textured wall.",
  },
] as const;

export const exampleParts = [
  {
    name: "Throttle linkage collar",
    note: "Measured against a surviving original and rebuilt for repeatable alignment.",
    process: "Inspection, tolerance check, finishing",
    image: "/images/example-part-1.jpg",
    alt: "A craftsperson measuring a long metal rail with a gauge.",
  },
  {
    name: "Window regulator gear insert",
    note: "Re-machined for small-batch restoration work where catalog stock no longer exists.",
    process: "Reverse engineering, machining, deburring",
    image: "/images/example-part-2.jpg",
    alt: "A senior craftsperson sharpening a piece of metal in a workshop.",
  },
] as const;

export const sustainabilityBullets = [
  "Repairing difficult-to-source components keeps original vehicles on the road longer.",
  "Targeted remanufacturing avoids unnecessary full-system replacement and reduces waste.",
  "Low-volume production supports preservation-minded workshops without overbuilding stock.",
] as const;

export const formOptions = {
  platforms: [
    "Porsche",
    "Mercedes-Benz",
    "BMW",
    "Alfa Romeo",
    "Other heritage vehicle",
  ],
  urgency: [
    "Just researching options",
    "Need a quote this week",
    "Vehicle currently off the road",
  ],
} as const;
