import Drawer from "@/components/drawer";
import DrawerContent from "@/components/drawer-content";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import { mockConsoleError } from "../../tests/mocks";
import { render } from "../../tests/testing-library";
import { UndefinedProvider } from "./drawer-context";

describe("DrawerContext", () => {
  mockConsoleError();

  it("would throw an error if no Provider is defined", () => {
    expect(() =>
      render(
        <div>
          <Drawer>
            <DrawerContent navigation={mockDrawerNavigation} />
          </Drawer>
        </div>,
      ),
    ).toThrow(/useSidebar must be used within a SidebarProvider\./i);
  });
});
