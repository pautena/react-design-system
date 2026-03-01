import { render, screen } from "../../tests/testing-library";
import Separator from "./separator";

describe("Separator", () => {
  it("renders a horizontal separator by default", () => {
    render(<Separator data-testid="separator" />);

    const separator = screen.getByTestId("separator");

    expect(separator).toHaveAttribute("role", "separator");
    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("renders a vertical separator", () => {
    render(<Separator orientation="vertical" data-testid="separator" />);

    expect(screen.getByTestId("separator")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });
});
