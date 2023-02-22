<<<<<<< HEAD
import React from "react";
import { render, screen } from "~/tests/testing-library";
import { ValueImage } from "./value-image";
import workInProgressImg from "~/stories/assets/work-in-progress.jpg";

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
||||||| parent of 8213da0 (Add value image component)
=======
import React from "react";
import { render, screen } from "../../../tests";
import { ValueImage } from "./value-image";
import workInProgressImg from "../../../stories/assets/work-in-progress.jpg";

const DummyValue = "Lorem ipsum sit amet";

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
>>>>>>> 8213da0 (Add value image component)
