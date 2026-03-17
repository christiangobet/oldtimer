import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import LocalizedPage from "@/app/[locale]/page";

it("renders German copy for the de route", async () => {
  const page = await LocalizedPage({ params: Promise.resolve({ locale: "de" }) });
  render(page);
  expect(screen.getByText(/präzise gefertigte ersatzteile/i)).toBeInTheDocument();
});
