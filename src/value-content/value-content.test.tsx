import Typography from "@mui/material/Typography";
import { render, screen } from "~/tests/testing-library";
import { ValueContent } from "./value-content";
import userEvent from "@testing-library/user-event";

describe("ValueContent", () => {
  const renderComponent = ({
    tooltip,
    hideLabel,
  }: { tooltip?: string; hideLabel?: boolean } = {}) => {
    render(
      <ValueContent
        label="lorem ipsum"
        tooltip={tooltip}
        tooltipEnterDelay={0}
        hideLabel={hideLabel}
      >
        <Typography>Test content</Typography>
      </ValueContent>,
    );
  };

  it("should render a label", () => {
    renderComponent();

    expect(screen.getByRole("label", { name: /lorem ipsum/i })).toBeVisible();
  });

  it("shouldn't render a label if hideLabel=true", () => {
    renderComponent({ hideLabel: true });

    expect(screen.queryByRole("label", { name: /lorem ipsum/i })).not.toBeInTheDocument();
  });

  describe("tooltip", () => {
    it("should render a tooltip if is defined and the user hovers the value", async () => {
      renderComponent({ tooltip: "dolor sit amet" });

      await userEvent.hover(screen.getByText(/test content/i));

      expect(await screen.findByRole("tooltip", { name: /dolor sit amet/i })).toBeVisible();
    });

    it("shouldn't render a tooltip if it's not defined", () => {
      renderComponent({ tooltip: undefined });

      expect(screen.queryByRole("tooltip", { name: /dolor sit amet/i })).not.toBeInTheDocument();
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
