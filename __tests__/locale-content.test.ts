import { getSiteContent } from "@/lib/site";
import { expect, it } from "vitest";

it("returns German content for de and English content for en", () => {
  expect(getSiteContent("de").navigationLinks[0].label).toBe("Ablauf");
  expect(getSiteContent("en").navigationLinks[0].label).toBe("Process");
});
