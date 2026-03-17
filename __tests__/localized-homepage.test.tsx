import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import LocalizedPage from "@/app/[locale]/page";

it("renders English section copy on the en route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "en" }) });
  render(page);
  expect(
    screen.getByRole("heading", {
      name: /curated marque coverage for restorations that still deserve the right part/i,
    }),
  ).toBeInTheDocument();
});
