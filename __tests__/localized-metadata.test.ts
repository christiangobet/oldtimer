import { expect, it } from "vitest";
import { generateMetadata } from "@/app/[locale]/layout";

it("exposes localized metadata and alternates for German and English routes", async () => {
  const germanMetadata = await generateMetadata({
    params: Promise.resolve({ locale: "de" }),
  });
  const englishMetadata = await generateMetadata({
    params: Promise.resolve({ locale: "en" }),
  });

  expect(germanMetadata.title).not.toBe(englishMetadata.title);
  expect(germanMetadata.alternates?.languages?.de).toBe("/de");
  expect(germanMetadata.alternates?.languages?.en).toBe("/en");
});
