import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "@/tests/testing-library";
import { ConfirmDialog } from "./confirm-dialog";

interface DialogRenderArgs {
  open: boolean;
  disabled?: boolean;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  passphrase?: string;
}

describe("ConfirmDialog", () => {
  const renderComponent = ({
    open,
    disabled,
    confirmText,
    cancelText,
    loading,
    passphrase,
  }: DialogRenderArgs) => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(
      <ConfirmDialog
        open={open}
        disabled={disabled}
        loading={loading}
        passphrase={passphrase}
        title="lorem ipsum"
        onCancel={onCancel}
        onConfirm={onConfirm}
        cancelText={cancelText}
        confirmText={confirmText}
      >
        This is the content
      </ConfirmDialog>,
    );

    return { onCancel, onConfirm };
  };

  it("should render the dialog if open is true", () => {
    renderComponent({ open: true });

    expect(screen.getByRole("alertdialog")).toBeVisible();
  });

  it("shouldn't render the dialog if open is false", () => {
    renderComponent({ open: false });

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
  });

  it("should render the title", () => {
    renderComponent({ open: true });

    expect(screen.getByText("lorem ipsum")).toBeVisible();
  });

  it("should render the children content", () => {
    renderComponent({ open: true });

    expect(screen.getByText(/this is the content/i)).toBeVisible();
  });

  it("should call onCancel if the close button is clicked", async () => {
    const user = userEvent.setup();
    const { onCancel } = renderComponent({ open: true });

    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel if the cancel button is clicked", async () => {
    const user = userEvent.setup();
    const { onCancel } = renderComponent({ open: true });

    await user.click(screen.getByRole("button", { name: /cancel/i }));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("should call onConfirm if the confirm button is clicked", async () => {
    const user = userEvent.setup();
    const { onConfirm } = renderComponent({ open: true });

    await user.click(screen.getByRole("button", { name: /confirm/i }));

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  describe("disabled", () => {
    it("should have the close button as disabled", () => {
      renderComponent({ open: true, disabled: true });

      expect(screen.getByRole("button", { name: /close/i })).toBeDisabled();
    });

    it("should have the Cancel button as disabled", () => {
      renderComponent({ open: true, disabled: true });

      expect(screen.getByRole("button", { name: /cancel/i })).toBeDisabled();
    });

    it("should have the confirm button as disabled", () => {
      renderComponent({ open: true, disabled: true });

      expect(screen.getByRole("button", { name: /confirm/i })).toBeDisabled();
    });
  });

  it("should be able to change the cancel button text", () => {
    renderComponent({ open: true, cancelText: "updated cancel" });

    expect(
      screen.getByRole("button", { name: /updated cancel/i }),
    ).toBeVisible();
  });

  it("should be able to change the confirm button text", () => {
    renderComponent({ open: true, confirmText: "updated confirm" });

    expect(
      screen.getByRole("button", { name: /updated confirm/i }),
    ).toBeVisible();
  });

  describe("loading", () => {
    it("should render a loading indicator if is true", () => {
      renderComponent({ open: true, loading: true });

      expect(screen.getByRole("progressbar")).toBeVisible();
    });

    it("should have the close button as disabled", () => {
      renderComponent({ open: true, loading: true });

      expect(screen.getByRole("button", { name: /close/i })).toBeDisabled();
    });

    it("should have the Cancel button as disabled", () => {
      renderComponent({ open: true, loading: true });

      expect(screen.getByRole("button", { name: /cancel/i })).toBeDisabled();
    });

    it("should have the confirm button as disabled", () => {
      renderComponent({ open: true, loading: true });

      expect(screen.getByRole("button", { name: /confirm/i })).toBeDisabled();
    });
  });

  describe("passphrase", () => {
    it("should render an input to enter a passphrase", () => {
      renderComponent({ open: true, passphrase: "delete permanently" });

      const input = screen.getByRole("textbox", { name: /passphrase/i });
      expect(input).toBeVisible();
      expect(input).toHaveAttribute("placeholder", "delete permanently");
    });

    it("should have the confirm button disabled by default", () => {
      renderComponent({ open: true, passphrase: "delete permanently" });

      expect(screen.getByRole("button", { name: /confirm/i })).toBeDisabled();
    });

    it("should have the confirm button disabled if the user writes a non valid passphrase", async () => {
      const user = userEvent.setup();
      renderComponent({ open: true, passphrase: "delete permanently" });

      await user.type(
        screen.getByRole("textbox", { name: /passphrase/i }),
        "invalid passphrase",
      );

      expect(screen.getByRole("button", { name: /confirm/i })).toBeDisabled();
    });

    it("should have the confirm button enabled if the user writes a valid passphrase", async () => {
      const user = userEvent.setup();
      renderComponent({ open: true, passphrase: "delete permanently" });

      await user.type(
        screen.getByRole("textbox", { name: /passphrase/i }),
        "delete permanently",
      );

      expect(
        screen.getByRole("button", { name: /confirm/i }),
      ).not.toBeDisabled();
    });
  });
});
