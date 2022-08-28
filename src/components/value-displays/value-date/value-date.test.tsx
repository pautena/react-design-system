import React from "react";
import { render, screen } from "../../../tests";
import { ValueDate } from "./value-date";

describe("ValueText", () => {
  const renderComponent = () => {
    return render(
      <ValueDate label="Hello world" value={new Date(2022, 7, 10)} format="dd-MM-yyyy" />,
    );
  };

  it("would render the label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("would render the value", () => {
    renderComponent();

    expect(screen.getByText(/10-08-2022/i)).toBeInTheDocument();
  });
});
