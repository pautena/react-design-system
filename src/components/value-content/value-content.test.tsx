import userEvent from "@testing-library/user-event";
import { render, screen } from "../../tests/testing-library";
import { ValueContent } from "./value-content";

describe("ValueContent", () => {
  const renderComponent = ({ tooltip }: { tooltip?: string } = {}) => {
    render(
      <ValueContent label="lorem ipsum" tooltip={tooltip} tooltipEnterDelay={0}>
        <span>Test content</span>
      </ValueContent>,
    );
  };

  it("should render a label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /lorem ipsum/i })).toBeVisible();
  });

  describe("tooltip", () => {
    it("should expose tooltip title if is defined", async () => {
      const user = userEvent.setup();
      renderComponent({ tooltip: "dolor sit amet" });

      await user.hover(screen.getByText(/test content/i));

      expect(screen.getByTitle(/dolor sit amet/i)).toBeVisible();
    });

    it("shouldn't render tooltip title if it's not defined", () => {
      renderComponent({ tooltip: undefined });

      expect(screen.queryByTitle(/dolor sit amet/i)).not.toBeInTheDocument();
    });
  });

  describe("children", () => {
    it("should render the children if tooltip is defined", () => {
      renderComponent({ tooltip: "dolor sit amet" });

      expect(screen.getByText(/test content/i)).toBeVisible();
    });
    it("should render the children if tooltip is undefined", () => {
      renderComponent({ tooltip: undefined });

      expect(screen.getByText(/test content/i)).toBeVisible();
    });
  });
});
