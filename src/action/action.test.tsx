import { render, screen, fireEvent } from "~/tests/testing-library";
import { Action } from "./action";
import { vi } from "vitest";

describe("Action", () => {
  const renderComponent = ({
    description,
    helperText,
    confirmable = false,
    passphrase,
  }: {
    confirmable?: boolean;
    passphrase?: string;
    description?: string;
    helperText?: string;
  } = {}) => {
    const onAction = vi.fn();
    render(
      <Action
        title="Change Username"
        description={description}
        helperText={helperText}
        onAction={onAction}
        variant={"primary"}
        buttonText="Change"
        confirmable={confirmable}
        confirmTitle="Confirmation title"
        confirmDescription="Confirmation description"
        passphrase={passphrase}
      />,
    );
    return { onAction };
  };

  it("should render the title", () => {
    renderComponent();

    expect(screen.getByRole("heading", { name: "Change Username" })).toBeVisible();
  });

  it("should render the description if is defined", () => {
    renderComponent({ description: "This will change the username" });

    expect(screen.getByText("This will change the username")).toBeVisible();
  });

  it("should render the helper text if is defined", () => {
    renderComponent({ helperText: "I'm helping you" });

    expect(screen.getByText("I'm helping you")).toBeVisible();
  });

  it("should call onAction if the button is clicked and confirmable=false", () => {
    const { onAction } = renderComponent({ confirmable: false });

    fireEvent.click(screen.getByRole("button", { name: "Change" }));

    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("should open a dialog if the button is clicked and confirmable=true", () => {
    const { onAction } = renderComponent({ confirmable: true });

    fireEvent.click(screen.getByRole("button", { name: "Change" }));

    expect(onAction).not.toHaveBeenCalled();

    expect(screen.getByText("Confirmation title")).toBeVisible();
    expect(screen.getByText("Confirmation description")).toBeVisible();
  });

  it("should call onAction if the dialog is confirmed", () => {
    const { onAction } = renderComponent({ confirmable: true });

    fireEvent.click(screen.getByRole("button", { name: "Change" }));
    fireEvent.click(screen.getByRole("button", { name: "Confirm" }));

    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("should call onAction if the dialog is confirmed with a passphrase", () => {
    const { onAction } = renderComponent({ confirmable: true, passphrase: "yes" });

    fireEvent.click(screen.getByRole("button", { name: "Change" }));

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    expect(confirmButton).toBeDisabled();

    fireEvent.type(screen.getByRole("textbox"), "yes");
    expect(confirmButton).toBeEnabled();

    fireEvent.click(confirmButton);

    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
