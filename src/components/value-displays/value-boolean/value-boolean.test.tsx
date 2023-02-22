import React from "react";
import { ValueBoolean } from "./value-boolean";
import { render, screen } from "../../../tests";

describe("ValueBoolean", () => {
  const renderComponent = ({ value, placeholder }: { value?: boolean; placeholder?: string }) => {
    return render(<ValueBoolean label="Hello world" value={value} placeholder={placeholder} />);
  };

  it("would render the label", () => {
    renderComponent({ value: true });

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("would render a check if value is true", () => {
    renderComponent({ value: true });

    expect(screen.getByTestId("CheckIcon")).toBeInTheDocument();
  });

  it("would render a cross if value is false", () => {
    renderComponent({ value: false });

    expect(screen.getByTestId("CloseIcon")).toBeInTheDocument();
  });

  it("should render the placeholder if value is undefined", () => {
    renderComponent({ value: undefined });

    expect(screen.getByText(/-/i)).toBeInTheDocument();
  });

  it("should render the custom placeholder if value is undefined and placeholder has value", () => {
    renderComponent({ value: undefined, placeholder: "_" });

    expect(screen.getByText(/_/i)).toBeInTheDocument();
  });
});
