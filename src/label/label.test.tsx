import { render, screen } from "../tests/testing-library";
import { Label, type LabelVariant } from "./label";

describe("Label", () => {
  const renderComponent = (variant: LabelVariant | undefined = undefined) => {
    return render(<Label variant={variant} text="lorem ipsum" />);
  };

  it("renders the label text", () => {
    renderComponent();

    expect(screen.getByText("lorem ipsum")).toBeInTheDocument();
  });

  it("renders as default without a variant", () => {
    renderComponent(undefined);

    expect(screen.getByRole("label", { name: /default/i })).toBeVisible();
  });

  it.each([
    ["primary"],
    ["secondary"],
    ["default"],
    ["info"],
    ["warning"],
    ["error"],
  ])("renders correctly with variant %s", (variant: string) => {
    renderComponent(variant as LabelVariant);

    expect(
      screen.getByRole("label", { name: `lorem ipsum ${variant} label` }),
    ).toBeVisible();
  });
});
