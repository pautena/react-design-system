import { Drawer } from "@/components/navigation/drawer/drawer";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { mockConsoleError } from "@/tests/mocks";
import { render } from "@/tests/testing-library";

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
