import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";
import {
  contactButtons,
  contactFields,
  contactHeader,
  contactSuccess,
  serviceOptions,
  surfaceOptions,
} from "./contactContent";
import { contactValidationMessages } from "../../functions/validateContactForm";

/** Fills the form with valid values so a submit reaches the success state. */
async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(
    screen.getByRole("textbox", { name: contactFields.name.label }),
    "Popescu Andrei",
  );
  await user.type(
    screen.getByRole("textbox", { name: contactFields.phone.label }),
    "0722000000",
  );
  await user.selectOptions(
    screen.getByRole("combobox", { name: contactFields.service.label }),
    serviceOptions[0].value,
  );
  await user.click(screen.getByRole("checkbox"));
}

describe("ContactForm", () => {
  it("renders a level-2 heading with the section title", () => {
    render(<ContactForm />);
    expect(
      screen.getByRole("heading", { level: 2, name: contactHeader.title }),
    ).toBeInTheDocument();
  });

  it("exposes the #contact anchor matching the header nav link", () => {
    const { container } = render(<ContactForm />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "contact");
  });

  it("renders all labeled fields accessible by role/name", () => {
    render(<ContactForm />);
    expect(
      screen.getByRole("textbox", { name: contactFields.name.label }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: contactFields.phone.label }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: contactFields.service.label }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: contactFields.surface.label }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: contactFields.message.label }),
    ).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders every service and surface option", () => {
    render(<ContactForm />);
    for (const option of serviceOptions) {
      expect(
        screen.getByRole("option", { name: option.label }),
      ).toBeInTheDocument();
    }
    for (const option of surfaceOptions) {
      expect(
        screen.getByRole("option", { name: option.label }),
      ).toBeInTheDocument();
    }
  });

  it("shows the error banner and required-field messages on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: contactButtons.submit }));

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.getByText(contactValidationMessages.name),
    ).toBeInTheDocument();
    expect(
      screen.getByText(contactValidationMessages.phone),
    ).toBeInTheDocument();
    expect(
      screen.getByText(contactValidationMessages.service),
    ).toBeInTheDocument();
    expect(
      screen.getByText(contactValidationMessages.consent),
    ).toBeInTheDocument();
  });

  it("marks an invalid phone with aria-invalid and its message", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(
      screen.getByRole("textbox", { name: contactFields.phone.label }),
      "07123",
    );
    await user.click(screen.getByRole("button", { name: contactButtons.submit }));

    const phone = screen.getByRole("textbox", {
      name: contactFields.phone.label,
    });
    expect(phone).toHaveAttribute("aria-invalid", "true");
    expect(
      screen.getByText(contactValidationMessages.phone),
    ).toBeInTheDocument();
  });

  it("clears a field's error as the user edits it", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: contactButtons.submit }));
    expect(screen.getByText(contactValidationMessages.name)).toBeInTheDocument();

    await user.type(
      screen.getByRole("textbox", { name: contactFields.name.label }),
      "A",
    );

    expect(
      screen.queryByText(contactValidationMessages.name),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: contactFields.name.label }),
    ).not.toHaveAttribute("aria-invalid");
  });

  it("shows the success panel with a reference code on valid submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: contactButtons.submit }));

    const status = screen.getByRole("status");
    expect(
      within(status).getByRole("heading", { name: contactSuccess.heading }),
    ).toBeInTheDocument();
    expect(within(status).getByText(/^#DP-2025-\d{4}$/)).toBeInTheDocument();

    // The form fields are gone once success is shown.
    expect(
      screen.queryByRole("button", { name: contactButtons.submit }),
    ).not.toBeInTheDocument();
  });

  it("returns to an empty form when 'Trimite o altă solicitare' is clicked", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: contactButtons.submit }));
    await user.click(screen.getByRole("button", { name: contactButtons.retry }));

    const name = screen.getByRole("textbox", { name: contactFields.name.label });
    expect(name).toHaveValue("");
    expect(
      screen.getByRole("button", { name: contactButtons.submit }),
    ).toBeInTheDocument();
  });
});
