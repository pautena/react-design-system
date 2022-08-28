import React from "react";
import { render, screen } from "../../../tests";
import { ValueText } from "./value-text";

describe("ValueText", () => {
  const renderComponent = () => {
    return render(<ValueText label="Hello world" value="Lorem ipsum sit amet" />);
  };

  it("would render the label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("would render the value", () => {
    renderComponent();

    expect(screen.getByText(/lorem ipsum sit amet/i)).toBeInTheDocument();
  });
});
