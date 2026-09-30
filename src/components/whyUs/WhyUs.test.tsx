import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyUs } from "./WhyUs";
import { advantages, whyUsHeader } from "./whyUsContent";

describe("WhyUs", () => {
  it("renders a level-2 heading with the section title", () => {
    render(<WhyUs />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(whyUsHeader.title);
  });

  it("renders every advantage title and description", () => {
    render(<WhyUs />);

    for (const advantage of advantages) {
      expect(
        screen.getByRole("heading", { level: 3, name: advantage.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(advantage.description)).toBeInTheDocument();
    }
  });

  it("exposes the #de-ce-noi anchor matching the header nav link", () => {
    const { container } = render(<WhyUs />);

    const section = container.querySelector("section");
    expect(section).not.toBeNull();
    expect(section).toHaveAttribute("id", "de-ce-noi");
  });
});
