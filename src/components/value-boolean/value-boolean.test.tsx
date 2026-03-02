import { render, screen } from "../../tests/testing-library";
import { ValueBoolean } from "./value-boolean";

describe("ValueBoolean", () => {
  const renderComponent = ({
    value,
    placeholder,
  }: {
    value?: boolean;
    placeholder?: string;
  }) => {
    render(
      <ValueBoolean
        label="Hello world"
        value={value}
        placeholder={placeholder}
      />,
    );
  };

  it("would render the label", () => {
    renderComponent({ value: true });

    expect(screen.getByRole("label", { name: /hello world/i })).toBeVisible();
  });

  it("would render a check if value is true", () => {
    renderComponent({ value: true });

    expect(screen.getByTestId("CheckIcon")).toBeVisible();
  });

  it("would render a cross if value is false", () => {
    renderComponent({ value: false });

    expect(screen.getByTestId("CloseIcon")).toBeVisible();
  });

  describe("accessibility", () => {
    it("should be checked if value is true", () => {
      renderComponent({ value: true });

      expect(screen.getByLabelText(/hello world/i)).toBeChecked();
    });

    it("shouldn't be checked if value is false", () => {
      renderComponent({ value: false });

      expect(screen.getByLabelText(/hello world/i)).not.toBeChecked();
    });
  });

  it("should render the placeholder if value is undefined", () => {
    renderComponent({ value: undefined });

    expect(screen.getByText(/-/i)).toBeVisible();
  });

  it("should render the custom placeholder if value is undefined and placeholder has value", () => {
    renderComponent({ value: undefined, placeholder: "_" });

    expect(screen.getByText(/_/i)).toBeVisible();
  });
});
