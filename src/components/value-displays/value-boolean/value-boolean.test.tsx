import React from "react";
import { ValueBoolean } from "./value-boolean";
import { render, screen } from "../../../tests";

describe("ValueBoolean", () => {
  const renderComponent = ({ value }: { value: boolean }) => {
    return render(<ValueBoolean label="Hello world" value={value} />);
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
});
