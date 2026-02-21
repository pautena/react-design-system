import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { render, screen } from "../../../tests/testing-library";
import CheckboxField from "./checkbox-field";

describe("CheckboxField", () => {
  const renderComponent = ({
    helperText,
    error,
    disabled,
    defaultChecked,
  }: {
    helperText?: string;
    error?: string;
    disabled?: boolean;
    defaultChecked?: boolean;
  } = {}) => {
    const onCheckedChange = vi.fn();

    render(
      <CheckboxField
        label="Accept terms"
        helperText={helperText}
        error={error}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
      />,
    );

    return { onCheckedChange };
  };

  it("renders a checkbox with label", () => {
    renderComponent();

    expect(
      screen.getByRole("checkbox", { name: /accept terms/i }),
    ).toBeInTheDocument();
  });

  it("calls onCheckedChange when toggled", async () => {
    const user = userEvent.setup();
    const { onCheckedChange } = renderComponent();

    await user.click(screen.getByRole("checkbox", { name: /accept terms/i }));

    expect(onCheckedChange).toHaveBeenCalled();
  });

  it("shows helper text", () => {
    renderComponent({ helperText: "Required to continue" });

    expect(screen.getByText(/required to continue/i)).toBeVisible();
  });

  it("shows error text and marks checkbox invalid", () => {
    renderComponent({ error: "You must accept terms" });

    expect(screen.getByRole("alert")).toHaveTextContent(
      /you must accept terms/i,
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("hides helper text when error is present", () => {
    renderComponent({
      helperText: "Required to continue",
      error: "You must accept terms",
    });

    expect(screen.queryByText(/required to continue/i)).not.toBeInTheDocument();
  });

  it("does not change when disabled", async () => {
    const user = userEvent.setup();
    const { onCheckedChange } = renderComponent({ disabled: true });

    await user.click(screen.getByRole("checkbox", { name: /accept terms/i }));

    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});
