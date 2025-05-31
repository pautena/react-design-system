import workInProgressImg from "../stories/assets/work-in-progress.jpg";
import { render, screen } from "../tests/testing-library";
import { ValueImage } from "./value-image";

describe("ValueImage", () => {
  const renderComponent = () => {
    return render(<ValueImage label="Hello world" value={workInProgressImg} />);
  };

  it("should render the label", () => {
    renderComponent();

    expect(
      screen.getByRole("label", { name: /hello world/i }),
    ).toBeInTheDocument();
  });

  it("should render an image", () => {
    renderComponent();

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
