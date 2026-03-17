import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { LanguageToggle } from "@/components/ui/language-toggle";

it("links from de to en while preserving the section anchor", () => {
  render(<LanguageToggle locale="de" hash="#platforms" />);
  expect(screen.getByRole("link", { name: /english/i })).toHaveAttribute(
    "href",
    "/en#platforms",
  );
});
