import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import LocalizedPage from "@/app/[locale]/page";

it("renders supported platform cards on the English route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "en" }) });
  render(page);
  expect(screen.getByRole("heading", { name: /porsche/i })).toBeInTheDocument();
});
