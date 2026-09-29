import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header mobile menu", () => {
  it("toggles the disclosure menu and reflects state via aria-expanded", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Deschide meniu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    // Menu is not in the accessibility tree when closed.
    expect(document.getElementById("mobile-menu")).toBeNull();

    await user.click(toggle);

    const openToggle = screen.getByRole("button", { name: "Închide meniu" });
    expect(openToggle).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-menu")).not.toBeNull();

    await user.click(openToggle);
    expect(
      screen.getByRole("button", { name: "Deschide meniu" }),
    ).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("mobile-menu")).toBeNull();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Deschide meniu" }));
    expect(document.getElementById("mobile-menu")).not.toBeNull();

    await user.keyboard("{Escape}");
    expect(document.getElementById("mobile-menu")).toBeNull();
  });

  it("closes when a menu link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Deschide meniu" }));
    const panel = document.getElementById("mobile-menu");
    expect(panel).not.toBeNull();

    // Click the first link inside the mobile menu panel.
    const firstLink = panel?.querySelector("a");
    expect(firstLink).not.toBeNull();
    await user.click(firstLink as HTMLAnchorElement);

    expect(document.getElementById("mobile-menu")).toBeNull();
  });
});
