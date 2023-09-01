import React from "react";
import { render, screen } from "~/Tests/TestingLibrary";
import { ValueImage } from "./ValueImage";
import workInProgressImg from "~/Stories/Assets/WorkInProgress.jpg";

describe("ValueImage", () => {
  const renderComponent = () => {
    return render(<ValueImage label="Hello world" value={workInProgressImg} />);
  };

  it("should render the label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /hello world/i })).toBeInTheDocument();
  });

  it("should render an image", () => {
    renderComponent();

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
