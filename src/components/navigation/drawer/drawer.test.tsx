import userEvent from "@testing-library/user-event";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import { useDrawer } from "@/components/navigation/drawer-context/drawer-context";
import type { DrawerState } from "@/types/drawer.types";
import { render, screen } from "@/tests/testing-library";
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
