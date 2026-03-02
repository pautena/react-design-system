import { render, screen } from "@/tests/testing-library";
import { ValueItem } from "./value-item";

describe("ValueItem", () => {
  const renderComponent = () => {
    render(
      <ValueItem>
        <span>test content</span>
      </ValueItem>,
    );
  };

  it("should render the children", () => {
    renderComponent();

    expect(screen.getByText(/test content/i)).toBeVisible();
  });
});
