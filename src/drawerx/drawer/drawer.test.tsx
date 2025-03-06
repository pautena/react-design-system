import Typography from "@mui/material/Typography";
import { render, screen } from "../../tests/testing-library";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider, useDrawer } from "../drawer-provider";
import { mockDrawerNavigation } from "./drawer.mock";
import { DrawerState, DrawerVariant } from "../drawer.types";
import userEvent from "@testing-library/user-event";
import { Drawer } from "./drawer";

describe("Drawer", () => {
  const renderComponent = ({
    initialState = "open",
    variant,
    underAppBar,
  }: { initialState?: DrawerState; variant?: DrawerVariant; underAppBar?: boolean } = {}) => {
    const DrawerContentTest = () => {
      const { state } = useDrawer();

      return (
        <>
          <Typography>state: {state}</Typography>
          <DrawerContent navigation={mockDrawerNavigation} />
        </>
      );
    };

    render(
      <DrawerProvider initialState={initialState} variant={variant} underAppBar={underAppBar}>
        <Drawer>
          <DrawerContentTest />
        </Drawer>
      </DrawerProvider>,
    );
  };

  it("should render the items text if the drawer is open", () => {
    renderComponent({ initialState: "open" });

    mockDrawerNavigation.forEach((item) => {
      expect(screen.getByText(item.text)).toBeVisible();
    });
  });

  describe("close button", () => {
    it.each([
      [true, "temporary", false],
      [false, "temporary", true],
      [true, "persistent", false],
      [false, "persistent", true],
      [false, "clipped", false],
      [false, "clipped", true],
      [true, "mini", false],
      [false, "mini", true],
    ] satisfies [boolean, DrawerVariant, boolean][])(
      "should be visible=%s if variant=%s and underAppBar=%s",
      (visible, variant, underAppBar) => {
        renderComponent({ variant, underAppBar });

        expect(!!screen.queryByTestId("ChevronLeftIcon")).toBe(visible);
      },
    );

    it("should switch the drawer state if is clicked", async () => {
      renderComponent({ initialState: "open", variant: "temporary" });

      await userEvent.click(screen.getByTestId("ChevronLeftIcon"));

      expect(screen.getByText("state: close")).toBeVisible();
    });
  });
});
