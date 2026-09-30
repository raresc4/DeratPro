import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";
import { phone } from "../header/navLinks";
import { footerContact, footerCopyright } from "./footerContent";

describe("Footer", () => {
  it("renders a contentinfo landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("exposes the phone as a tel: link with the shared number", () => {
    render(<Footer />);
    const phoneLink = screen.getByRole("link", { name: phone.display });
    expect(phoneLink).toHaveAttribute("href", phone.href);
  });

  it("exposes the email as a mailto: link", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", {
      name: footerContact.email.display,
    });
    expect(emailLink).toHaveAttribute("href", footerContact.email.href);
  });

  it("renders a representative service and legal link", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: "Deratizare Ecologică" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Termeni și Condiții" }),
    ).toBeInTheDocument();
  });

  it("renders the copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(footerCopyright)).toBeInTheDocument();
  });
});
