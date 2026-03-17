import { render, screen } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";
import { Reveal } from "@/components/ui/reveal";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

it("renders children without hiding content for reduced motion users", () => {
  render(<Reveal>Visible content</Reveal>);
  expect(screen.getByText("Visible content")).toBeInTheDocument();
});
