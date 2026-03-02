import { render, screen } from "../../tests/testing-library";
import { Badge, type BadgeVariant } from "./badge";

describe("Badge", () => {
  const renderComponent = (variant: BadgeVariant | undefined = undefined) => {
    return render(<Badge variant={variant} text="lorem ipsum" />);
  };

  const getBadge = () => {
    return screen.getByText("lorem ipsum").closest("[data-slot='badge']");
  };

  it("renders the badge text", () => {
    renderComponent();

    expect(screen.getByText("lorem ipsum")).toBeInTheDocument();
  });

  it("renders as default without a variant", () => {
    renderComponent(undefined);

    expect(getBadge()).toHaveAttribute("data-variant", "default");
  });

  it.each([
    ["primary"],
    ["secondary"],
    ["default"],
    ["info"],
    ["warning"],
    ["error"],
    ["success"],
  ])("renders correctly with variant %s", (variant: string) => {
    renderComponent(variant as BadgeVariant);

    expect(screen.getByText("lorem ipsum")).toBeVisible();
  });

  it.each([
    ["primary", "default"],
    ["secondary", "secondary"],
    ["default", "default"],
    ["info", "outline"],
    ["warning", "outline"],
    ["error", "destructive"],
    ["success", "secondary"],
  ])("maps variant %s to ui variant %s", (variant, uiVariant) => {
    renderComponent(variant as BadgeVariant);

    expect(getBadge()).toHaveAttribute("data-variant", uiVariant);
  });
});
