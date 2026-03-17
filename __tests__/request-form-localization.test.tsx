import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RequestForm } from "@/components/request-form";
import { getSiteContent } from "@/lib/site";

it("renders German form labels when given German content", () => {
  render(<RequestForm content={getSiteContent("de").requestForm} />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/fahrzeugplattform/i)).toBeInTheDocument();
});
