import userEvent from "@testing-library/user-event";
import { DrawerContent } from "@/components/drawer-content";
import { DrawerProvider, useDrawer } from "@/components/drawer-context";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import type { DrawerState } from "@/components/drawerx/drawer.types";
import { render, screen } from "../../tests/testing-library";
import { Drawer } from "./drawer";

describe("Drawer", () => {
  const renderComponent = ({
    initialState = "open",
    clipped,
  }: {
    initialState?: DrawerState;
    clipped?: boolean;
  } = {}) => {
    const DrawerContentTest = () => {
      const { state, switchState } = useDrawer();

      return (
        <>
          <p>state: {state}</p>
          <button type="button" onClick={switchState}>
            toggle
          </button>
          <DrawerContent navigation={mockDrawerNavigation} />
        </>
      );
    };

    render(
      <DrawerProvider initialState={initialState} clipped={clipped}>
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

  it("should switch state if toggle is clicked", async () => {
    const user = userEvent.setup();
    renderComponent({
      initialState: "open",
      clipped: false,
    });

    await user.click(screen.getByRole("button", { name: "toggle" }));
    expect(screen.getByText("state: close")).toBeVisible();
  });
});
