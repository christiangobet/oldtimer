import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { RequestForm } from "@/components/request-form";

it("shows required-field validation before mock submit success", async () => {
  render(<RequestForm />);
  fireEvent.click(screen.getByRole("button", { name: /submit request/i }));
  expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
});
