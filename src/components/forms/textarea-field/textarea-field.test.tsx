import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { expectProgressIndicator } from "../../../tests/assertions";
import { render, screen } from "../../../tests/testing-library";
import { TextareaField } from "./textarea-field";

describe("TextareaField", () => {
  const renderComponent = ({
    value,
    loading,
    helperText,
    error,
    rowCount,
  }: {
    value?: string;
    loading?: boolean;
    helperText?: string;
    error?: string;
    rowCount?: number;
  } = {}) => {
    const onChange = vi.fn();
    const onChangeValue = vi.fn();

    render(
      <TextareaField
        label="Vehicle notes"
        loading={loading}
        helperText={helperText}
        error={error}
        rowCount={rowCount}
        value={value}
        onChange={onChange}
        onChangeValue={onChangeValue}
      />,
    );

    return { onChange, onChangeValue };
  };

  it("renders a label", () => {
    renderComponent();

    expect(
      screen.getByRole("textbox", { name: /vehicle notes/i }),
    ).toBeVisible();
  });

  it("renders the value", () => {
    renderComponent({ value: "First line\nSecond line" });

    expect(screen.getByRole("textbox")).toHaveValue("First line\nSecond line");
  });

  it("sets the textarea rows from rowCount", () => {
    renderComponent({ rowCount: 6 });

    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "6");
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const { onChange, onChangeValue } = renderComponent();

    await user.type(screen.getByRole("textbox"), "Vehicle details");

    expect(onChange).toHaveBeenCalled();
    expect(onChangeValue).toHaveBeenCalled();
    expect(onChangeValue.mock.calls.at(-1)?.[1]).toBe("Vehicle details");
    expect(onChange.mock.calls.at(-1)?.[0].target.value).toBe(
      "Vehicle details",
    );
  });

  it("renders a loading indicator when loading", () => {
    renderComponent({ loading: true });

    expectProgressIndicator();
  });

  it("renders helper text", () => {
    renderComponent({ helperText: "Describe relevant vehicle details" });

    expect(
      screen.getByText(/describe relevant vehicle details/i),
    ).toBeVisible();
  });

  it("renders error text and marks textarea invalid", () => {
    renderComponent({ error: "Notes are required" });

    expect(screen.getByRole("alert")).toHaveTextContent(/notes are required/i);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("hides helper text when error is present", () => {
    renderComponent({
      helperText: "Describe relevant vehicle details",
      error: "Notes are required",
    });

    expect(
      screen.queryByText(/describe relevant vehicle details/i),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(/notes are required/i);
  });
});
