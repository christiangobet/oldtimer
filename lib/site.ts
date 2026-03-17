import { deContent } from "@/lib/content/de";
import { enContent } from "@/lib/content/en";
import type { Locale } from "@/lib/i18n";

export type SiteMetadataContent = {
  name: string;
  title: string;
  description: string;
  locale: string;
  keywords: readonly string[];
};

export type NavigationLink = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Platform = {
  name: string;
  years: string;
  summary: string;
  image: string;
  alt: string;
  imagePosition: string;
};

export type ExamplePart = {
  name: string;
  note: string;
  process: string;
  image: string;
  alt: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type RequestFormContent = {
  labels: {
    name: string;
    email: string;
    platform: string;
    year: string;
    urgency: string;
    partDescription: string;
  };
  selectPlaceholder: string;
  helperText: string;
  submitLabel: string;
  successMessage: string;
  validation: {
    name: string;
    email: string;
    platform: string;
    partDescription: string;
  };
  options: {
    platforms: readonly string[];
    urgency: readonly string[];
  };
};

export type SiteContent = {
  site: SiteMetadataContent;
  header: {
    ctaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    workshopNoteLabel: string;
    workshopNoteTitle: string;
    workshopNoteDescription: string;
  };
  navigationLinks: readonly NavigationLink[];
  metrics: readonly Metric[];
  processSection: SectionCopy;
  processSteps: readonly ProcessStep[];
  platformsSection: SectionCopy;
  supportedPlatforms: readonly Platform[];
  examplesSection: SectionCopy & {
    footerLabel: string;
  };
  exampleParts: readonly ExamplePart[];
  requestSection: SectionCopy;
  requestForm: RequestFormContent;
  sustainabilitySection: SectionCopy & {
    ctaLabel: string;
    image: string;
    imageAlt: string;
  };
  sustainabilityBullets: readonly string[];
  footer: {
    name: string;
    description: string;
  };
  languageToggle: {
    activeLabel: string;
    inactiveLabel: string;
  };
};

const siteContentByLocale: Record<Locale, SiteContent> = {
  de: deContent,
  en: enContent,
};

export function getSiteContent(locale: Locale): SiteContent {
  return siteContentByLocale[locale];
}

export const siteConfig = enContent.site;
export const navigationLinks = enContent.navigationLinks;
export const metrics = enContent.metrics;
export const processSteps = enContent.processSteps;
export const supportedPlatforms = enContent.supportedPlatforms;
export const exampleParts = enContent.exampleParts;
export const sustainabilityBullets = enContent.sustainabilityBullets;
export const formOptions = enContent.requestForm.options;
