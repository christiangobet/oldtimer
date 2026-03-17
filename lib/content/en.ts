import type { SiteContent } from "@/lib/site";

export const enContent: SiteContent = {
  site: {
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
  },
  header: {
    ctaLabel: "Start Inquiry",
  },
  hero: {
    eyebrow: "Heritage Components, Precisely Rebuilt",
    title: "Precision-made replacements for the parts restoration catalogs forgot.",
    description:
      "OldPart Precision works with collectors and specialist workshops to reverse-engineer, machine, and finish rare heritage vehicle components without sacrificing fit, feel, or visual restraint.",
    primaryCtaLabel: "Request a Quote",
    secondaryCtaLabel: "See the Process",
    workshopNoteLabel: "Workshop Note",
    workshopNoteTitle: "Rare geometry deserves measured replacements, not guesswork.",
    workshopNoteDescription:
      "Our process stays narrow, documented, and deliberately low-volume so each part earns its place on the car.",
  },
  navigationLinks: [
    { label: "Process", href: "#process" },
    { label: "Platforms", href: "#platforms" },
    { label: "Examples", href: "#examples" },
    { label: "Request", href: "#request" },
  ],
  metrics: [
    { value: "72h", label: "Initial review window" },
    { value: "40+", label: "Years of marque coverage" },
    { value: "<0.05mm", label: "Tolerance target for critical parts" },
    { value: "1:1", label: "Reverse-engineered replacement path" },
  ],
  processSection: {
    eyebrow: "How It Works",
    title: "A measured route from broken original to workshop-ready replacement.",
    description:
      "We keep the process technical, calm, and transparent so restoration teams can move without gambling on fit or finish.",
  },
  processSteps: [
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
  ],
  platformsSection: {
    eyebrow: "Supported Platforms",
    title: "Curated marque coverage for restorations that still deserve the right part.",
    description:
      "We focus on heritage platforms where geometry, finish, and fit can’t be treated like commodity inventory.",
  },
  supportedPlatforms: [
    {
      name: "Porsche",
      years: "356 to air-cooled 911",
      summary: "Small-batch reproduction support for iconic rear-engined platforms.",
      image: "/images/platform-porsche-heritage.jpg",
      alt: "Blue Porsche 356 coupe photographed at a classic motoring event.",
      imagePosition: "center 52%",
    },
    {
      name: "Mercedes-Benz",
      years: "Pagoda to W123",
      summary:
        "Precision metalwork for touring coupes, saloons, and long-life restorations.",
      image: "/images/platform-mercedes-heritage.jpg",
      alt: "Green Mercedes-Benz W123 saloon parked in a grassy roadside setting.",
      imagePosition: "center 46%",
    },
    {
      name: "BMW",
      years: "Neue Klasse to E24",
      summary: "Measured replacement paths for rare trim supports, brackets, and housings.",
      image: "/images/platform-bmw-heritage.jpg",
      alt: "Red BMW 2002 photographed at a classic car gathering.",
      imagePosition: "center 42%",
    },
    {
      name: "Alfa Romeo",
      years: "Giulia to Spider",
      summary:
        "Elegant Italian platforms supported with faithful geometry and restrained finishing.",
      image: "/images/platform-alfa-heritage.jpg",
      alt: "Red vintage Alfa Romeo outdoors near a textured wall.",
      imagePosition: "center 78%",
    },
  ],
  examplesSection: {
    eyebrow: "Example Parts",
    title: "Proof points from the kind of components that usually stall a restoration.",
    description:
      "Each example represents a narrow, workshop-led manufacturing problem solved with measured documentation instead of guesswork.",
    footerLabel: "Built for low-volume, restoration-first workflows",
  },
  exampleParts: [
    {
      name: "Throttle linkage collar",
      note: "Measured against a surviving original and rebuilt for repeatable alignment.",
      process: "Inspection, tolerance check, finishing",
      image: "/images/example-part-1.jpg",
      alt: "A craftsperson measuring a long metal rail with a gauge.",
    },
    {
      name: "Window regulator gear insert",
      note:
        "Re-machined for small-batch restoration work where catalog stock no longer exists.",
      process: "Reverse engineering, machining, deburring",
      image: "/images/example-part-2.jpg",
      alt: "Close-up of a CNC milling head machining a small metal component.",
    },
  ],
  requestSection: {
    eyebrow: "Request a Part",
    title:
      "Tell us what failed, what vehicle it belongs to, and what the restoration can’t wait on.",
    description:
      "We built this first release as a focused frontend experience so workshops can preview the request flow before backend handling is introduced.",
  },
  requestForm: {
    labels: {
      name: "Name",
      email: "Email",
      platform: "Vehicle platform",
      year: "Year / build detail",
      urgency: "Urgency",
      partDescription: "Part description",
    },
    selectPlaceholder: "Select an option",
    helperText:
      "This form is a frontend-only request draft in v1. Submitting shows a mock confirmation and does not transmit your details anywhere yet.",
    submitLabel: "Submit Request",
    successMessage:
      "Request draft saved locally for review. This is a mock success state for the frontend-only experience.",
    validation: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      platform: "Please choose your vehicle platform.",
      partDescription: "Please describe the part you need.",
    },
    options: {
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
    },
  },
  sustainabilitySection: {
    eyebrow: "Repair Over Replacement",
    title:
      "Better preservation starts with keeping good cars in service, not over-replacing them.",
    description:
      "Thoughtful remanufacturing helps owners save rare vehicles, reduce waste, and avoid retiring original systems too early.",
    ctaLabel: "Start the Request",
    image: "/images/sustainability-cnc-mill.jpg",
    imageAlt: "Computer-controlled milling machine in a precision workshop.",
  },
  sustainabilityBullets: [
    "Repairing difficult-to-source components keeps original vehicles on the road longer.",
    "Targeted remanufacturing avoids unnecessary full-system replacement and reduces waste.",
    "Low-volume production supports preservation-minded workshops without overbuilding stock.",
  ],
  footer: {
    name: "OldPart Precision",
    description: "Precision-led remanufacturing for rare heritage vehicle components.",
  },
  languageToggle: {
    activeLabel: "English",
    inactiveLabel: "German",
  },
};
