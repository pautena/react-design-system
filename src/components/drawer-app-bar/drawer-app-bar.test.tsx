import userEvent from "@testing-library/user-event";
import { DrawerProvider, useDrawer } from "@/components/drawer-context";
import type {
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { render, screen } from "../../tests/testing-library";
import DrawerAppBar from "./drawer-app-bar";

describe("DrawerAppBar", () => {
  const renderComponent = ({
    title,
    initialState,
    variant = "temporary",
    clipped,
  }: {
    title?: string;
    initialState?: DrawerState;
    variant?: DrawerVariant;
    clipped?: boolean;
  } = {}) => {
    const TestContent = () => {
      const { state } = useDrawer();
      return <p>state: {state}</p>;
    };

    render(
      <DrawerProvider
        initialState={initialState}
        variant={variant}
        clipped={clipped}
      >
        <DrawerAppBar title={title}>test content</DrawerAppBar>
        <TestContent />
      </DrawerProvider>,
    );
  };

  it.each([
    ["temporary" as DrawerVariant, "open" as DrawerState],
    ["temporary" as DrawerVariant, "close" as DrawerState],
    ["persistent" as DrawerVariant, "open" as DrawerState],
    ["persistent" as DrawerVariant, "close" as DrawerState],
    ["mini" as DrawerVariant, "collapse" as DrawerState],
  ])("should render menu button for variant %s", (variant, initialState) => {
    renderComponent({ variant, initialState });

    expect(screen.getByRole("button", { name: /open drawer/i })).toBeVisible();
  });

  it("should switch drawer state when menu button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ initialState: "open", variant: "temporary" });

    await user.click(screen.getByRole("button", { name: /open drawer/i }));
    expect(screen.getByText("state: close")).toBeVisible();
  });

  it("should hide menu button for mini open when not clipped", () => {
    renderComponent({ variant: "mini", initialState: "open", clipped: false });

    expect(
      screen.queryByRole("button", { name: /open drawer/i }),
    ).not.toBeInTheDocument();
  });

  it("should render children", () => {
    renderComponent();
    expect(screen.getByText(/test content/i)).toBeVisible();
  });

  it("should render title when defined", () => {
    renderComponent({ title: "Lorem ipsum" });

    expect(
      screen.queryByRole("heading", { level: 1, name: /lorem ipsum/i }),
    ).toBeInTheDocument();
  });
});
