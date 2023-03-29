import React from "react";
import { render, screen } from "~/tests/testing-library";
import { ValueRating } from "./value-rating";

describe("ValueRating", () => {
  const renderComponent = ({ maxRating }: { maxRating?: number } = {}) => {
    render(<ValueRating label="hello world" value={3} maxRating={maxRating} />);
  };

  it("should render a label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("should render 5 stars by default", () => {
    renderComponent();

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
    expect(screen.getAllByTestId("StarBorderIcon")).toHaveLength(2);
  });

  it("should render maxRating stars if is set", () => {
    renderComponent({ maxRating: 7 });

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
    expect(screen.getAllByTestId("StarBorderIcon")).toHaveLength(4);
  });

  it("should render 3 filled stars", () => {
    renderComponent();

    expect(screen.getAllByTestId("StarIcon")).toHaveLength(3);
  });
});
