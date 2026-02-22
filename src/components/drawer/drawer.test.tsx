import userEvent from "@testing-library/user-event";
import DrawerContent from "@/components/drawer-content";
import { DrawerProvider, useDrawer } from "@/components/drawer-context";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import type {
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { render, screen } from "../../tests/testing-library";
import Drawer from "./drawer";

describe("Drawer", () => {
  const renderComponent = ({
    initialState = "open",
    variant,
    clipped,
  }: {
    initialState?: DrawerState;
    variant?: DrawerVariant;
    clipped?: boolean;
  } = {}) => {
    const DrawerContentTest = () => {
      const { state } = useDrawer();

      return (
        <>
          <p>state: {state}</p>
          <DrawerContent navigation={mockDrawerNavigation} />
        </>
      );
    };

    render(
      <DrawerProvider
        initialState={initialState}
        variant={variant}
        clipped={clipped}
      >
        <Drawer>
          <DrawerContentTest />
        </Drawer>
      </DrawerProvider>,
    );
  };

  it("should render item text if drawer is open", () => {
    renderComponent({ initialState: "open" });

    mockDrawerNavigation.forEach((item) => {
      expect(screen.getByText(item.text)).toBeVisible();
    });
  });

  it.each([
    [true, "temporary", false],
    [false, "temporary", true],
    [true, "persistent", false],
    [false, "persistent", true],
    [true, "mini", false],
    [false, "mini", true],
  ] as const)("close button visible=%s if variant=%s and clipped=%s", (visible, variant, clipped) => {
    renderComponent({ variant, clipped });

    expect(!!screen.queryByTestId("ChevronLeftIcon")).toBe(visible);
  });

  it("should switch state if close icon is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "open",
      variant: "temporary",
      clipped: false,
    });

    await user.click(screen.getByTestId("ChevronLeftIcon"));
    expect(screen.getByText("state: close")).toBeVisible();
  });
});
