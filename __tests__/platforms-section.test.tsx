import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import HomePage from "@/app/page";

it("renders supported platform cards", () => {
  render(<HomePage />);
  expect(screen.getByText(/porsche/i)).toBeInTheDocument();
});
