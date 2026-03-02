import userEvent from "@testing-library/user-event";
import { render, screen } from "@/tests/testing-library";
import { Button, type ButtonVariant } from "./button";

describe("Button", () => {
  const renderComponent = (variant: ButtonVariant | undefined = undefined) => {
    const onClick = vi.fn();

    render(
      <Button variant={variant} onClick={onClick}>
        click me
      </Button>,
    );

    return {
      button: screen.getByRole("button", { name: /click me/i }),
      onClick,
    };
  };

  it("renders as default without a variant", () => {
    const { button } = renderComponent(undefined);

    expect(button).toHaveClass("bg-primary");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const { button, onClick } = renderComponent();

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["primary", "bg-primary"],
    ["secondary", "bg-secondary"],
    ["default", "bg-primary"],
    ["info", "border-border"],
    ["warning", "border-border"],
    ["error", "text-destructive"],
    ["success", "bg-secondary"],
    ["outline", "border-border"],
    ["ghost", "hover:bg-muted"],
    ["destructive", "text-destructive"],
    ["link", "underline-offset-4"],
  ])("maps variant %s to ui classes", (variant, expectedClass) => {
    const { button } = renderComponent(variant as ButtonVariant);

    expect(button).toHaveClass(expectedClass);
  });
});
