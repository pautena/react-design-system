import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import type {
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { render, screen } from "../../tests/testing-library";
import { DrawerProvider, useDrawer } from "./index";

const TestContent = () => {
  const {
    selectedItemId,
    state,
    variant,
    drawerWidth,
    clipped,
    switchState,
    close,
    collapse,
    open,
    setState,
  } = useDrawer();

  return (
    <div>
      <p>selectedItemId: ${selectedItemId}</p>
      <p>state: {state}</p>
      <p>variant: {variant}</p>
      <p>drawerWidth: {drawerWidth}</p>
      <p>clipped: {clipped.toString()}</p>
      <button type="button" onClick={switchState}>
        switch
      </button>
      <button type="button" onClick={open}>
        open
      </button>
      <button type="button" onClick={collapse}>
        collapse
      </button>
      <button type="button" onClick={close}>
        close
      </button>
      <button type="button" onClick={() => setState("collapse")}>
        set state
      </button>
    </div>
  );
};

describe("DrawerProvider", () => {
  const renderComponent = ({
    initialState,
    variant,
    clipped,
  }: {
    initialState?: DrawerState;
    variant?: DrawerVariant;
    clipped?: boolean;
  } = {}) => {
    const onStateChange = vi.fn();

    render(
      <DrawerProvider
        initialState={initialState}
        variant={variant}
        drawerWidth={400}
        clipped={clipped}
        onStateChange={onStateChange}
      >
        <TestContent />
      </DrawerProvider>,
    );

    return { onStateChange };
  };

  it("should pass drawerWidth", () => {
    renderComponent();

    expect(screen.getByText("drawerWidth: 400")).toBeVisible();
  });

  it.each([[true], [false]])("should pass clipped=%s", (clipped) => {
    renderComponent({ clipped });

    expect(screen.getByText(`clipped: ${clipped.toString()}`)).toBeVisible();
  });

  it.each([
    "temporary",
    "persistent",
    "mini",
  ] as const)("should pass variant=%s", (variant) => {
    renderComponent({ variant });
    expect(screen.getByText(`variant: ${variant}`)).toBeVisible();
  });

  it.each([
    "open",
    "collapse",
    "close",
  ] as const)("should render with state=%s", (initialState) => {
    renderComponent({ initialState });
    expect(screen.getByText(`state: ${initialState}`)).toBeVisible();
  });

  it("should change state to open if open is called", async () => {
    const user = userEvent.setup();
    renderComponent({ initialState: "close" });

    await user.click(screen.getByRole("button", { name: /open/i }));
    expect(screen.getByText("state: open")).toBeVisible();
  });

  it("should call onStateChange when state changes", async () => {
    const user = userEvent.setup();
    const { onStateChange } = renderComponent({ initialState: "close" });

    await user.click(screen.getByRole("button", { name: /open/i }));
    expect(onStateChange).toHaveBeenCalledWith("open");
  });
});
