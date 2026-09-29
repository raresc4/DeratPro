import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { heroContent, heroPrimaryCtaLabel, phone } from "./heroContent";

describe("Hero", () => {
  it("renders a level-1 heading with both the lead and accent copy", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(heroContent.headlineLead);
    expect(heading).toHaveTextContent(heroContent.headlineAccent);
  });

  it("renders the primary CTA linking to the contact section", () => {
    render(<Hero />);

    const cta = screen.getByRole("link", {
      name: new RegExp(heroPrimaryCtaLabel, "i"),
    });
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("renders the phone CTA with a tel: href", () => {
    render(<Hero />);

    const call = screen.getByRole("link", { name: /sună acum/i });
    expect(call).toHaveAttribute("href", phone.href);
    expect(phone.href).toMatch(/^tel:/);
  });

  it("reserves an animation slot that is hidden and non-interactive", () => {
    const { container } = render(<Hero />);

    const slot = document.getElementById("hero-animation-slot");
    expect(slot).not.toBeNull();
    expect(slot).toHaveAttribute("aria-hidden", "true");

    // Nothing inside the slot should be focusable or announced as a link.
    expect(slot?.querySelector("a, button, input, [tabindex]")).toBeNull();

    // Sanity: the slot lives inside the hero section.
    expect(container.querySelector("section")).toContainElement(slot);
  });
});
