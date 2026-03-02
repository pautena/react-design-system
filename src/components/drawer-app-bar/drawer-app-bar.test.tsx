import userEvent from "@testing-library/user-event";
import { DrawerProvider, useDrawer } from "@/components/drawer-context";
import type { DrawerState } from "@/components/drawerx/drawer.types";
import { render, screen } from "../../tests/testing-library";
import { DrawerAppBar } from "./drawer-app-bar";

describe("DrawerAppBar", () => {
  const renderComponent = ({
    title,
    initialState,
    clipped,
  }: {
    title?: string;
    initialState?: DrawerState;
    clipped?: boolean;
  } = {}) => {
    const TestContent = () => {
      const { state } = useDrawer();
      return <p>state: {state}</p>;
    };

    render(
      <DrawerProvider initialState={initialState} clipped={clipped}>
        <DrawerAppBar title={title}>test content</DrawerAppBar>
        <TestContent />
      </DrawerProvider>,
    );
  };

  it.each([
    "open",
    "close",
  ] as const)("should render menu button for state %s", (initialState) => {
    renderComponent({ initialState });

    expect(screen.getByRole("button", { name: /open drawer/i })).toBeVisible();
  });

  it("should switch drawer state when menu button is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({ initialState: "open" });

    await user.click(screen.getByRole("button", { name: /open drawer/i }));
    expect(screen.getByText("state: close")).toBeVisible();
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
