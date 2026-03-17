import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import HomePage from "@/app/page";

it("shows the primary quote request CTA", () => {
  render(<HomePage />);
  expect(screen.getByRole("link", { name: /request a quote/i })).toBeInTheDocument();
});
