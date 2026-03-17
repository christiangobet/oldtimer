import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import LocalizedPage from "@/app/[locale]/page";

it("shows the primary quote request CTA on the English route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "en" }) });
  render(page);
  expect(screen.getByRole("link", { name: /request a quote/i })).toBeInTheDocument();
});
