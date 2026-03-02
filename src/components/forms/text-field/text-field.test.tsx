import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { expectProgressIndicator } from "../../../tests/assertions";
import { render, screen } from "../../../tests/testing-library";
import { TextField } from "./text-field";

describe("TextField", () => {
  const renderComponent = ({
    value,
    loading,
    helperText,
    error,
  }: {
    value?: string;
    loading?: boolean;
    helperText?: string;
    error?: string;
  } = {}) => {
    const onChange = vi.fn();
    const onChangeValue = vi.fn();

    render(
      <TextField
        label="Car model"
        loading={loading}
        helperText={helperText}
        error={error}
        value={value}
        onChange={onChange}
        onChangeValue={onChangeValue}
      />,
    );

    return { onChange, onChangeValue };
  };

  it("renders a label", () => {
    renderComponent();

    expect(screen.getByRole("textbox", { name: /car model/i })).toBeVisible();
  });

  it("renders the value", () => {
    renderComponent({ value: "Model T" });

    expect(screen.getByRole("textbox")).toHaveValue("Model T");
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const { onChange, onChangeValue } = renderComponent();

    await user.type(screen.getByRole("textbox"), "Model T");

    expect(onChange).toHaveBeenCalled();
    expect(onChangeValue).toHaveBeenCalled();
    expect(onChangeValue.mock.calls.at(-1)?.[1]).toBe("Model T");
    expect(onChange.mock.calls.at(-1)?.[0].target.value).toBe("Model T");
  });

  it("renders a loading indicator when loading", () => {
    renderComponent({ loading: true });

    expectProgressIndicator();
  });

  it("renders helper text", () => {
    renderComponent({ helperText: "Use the official model name" });

    expect(screen.getByText(/use the official model name/i)).toBeVisible();
  });

  it("renders error text and marks input invalid", () => {
    renderComponent({ error: "Model is required" });

    expect(screen.getByRole("alert")).toHaveTextContent(/model is required/i);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("hides helper text when error is present", () => {
    renderComponent({
      helperText: "Use the official model name",
      error: "Model is required",
    });

    expect(
      screen.queryByText(/use the official model name/i),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(/model is required/i);
  });
});
