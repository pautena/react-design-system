import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { expectProgressIndicator } from "../../tests/assertions";
import { render, screen } from "../../tests/testing-library";
import TextField from "./text-field";

describe("TextField", () => {
  const renderComponent = ({
    value,
    loading,
    fetching,
  }: {
    value?: string;
    loading?: boolean;
    fetching?: boolean;
  } = {}) => {
    const onChange = vi.fn();

    render(
      <TextField
        label="Car model"
        loading={loading}
        fetching={fetching}
        value={value}
        onChange={onChange}
      />,
    );

    return { onChange };
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
    const { onChange } = renderComponent();

    await user.type(screen.getByRole("textbox"), "Model T");

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls.at(-1)?.[0].target.value).toBe("Model T");
  });

  it("renders a loading indicator when loading", () => {
    renderComponent({ loading: true });

    expectProgressIndicator();
  });

  it("renders a loading indicator when fetching", () => {
    renderComponent({ fetching: true });

    expectProgressIndicator();
  });
});
