import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HowItWorks } from "./HowItWorks";
import { howItWorksHeader, steps } from "./howItWorksContent";

describe("HowItWorks", () => {
  it("renders a level-2 heading with the section title", () => {
    render(<HowItWorks />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(howItWorksHeader.title);
  });

  it("renders every step title and description", () => {
    render(<HowItWorks />);

    for (const step of steps) {
      expect(
        screen.getByRole("heading", { level: 3, name: step.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    }
  });

  it("exposes the #cum-functioneaza anchor matching the header nav link", () => {
    const { container } = render(<HowItWorks />);

    const section = container.querySelector("section");
    expect(section).not.toBeNull();
    expect(section).toHaveAttribute("id", "cum-functioneaza");
  });
});
