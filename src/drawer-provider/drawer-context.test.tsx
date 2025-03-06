import Box from "@mui/material/Box";
import { mockConsoleError } from "../tests/mocks";
import { DrawerContent } from "../drawer-content";
import { mockDrawerNavigation } from "src/drawerx/drawer/drawer.mock";
import { UndefinedProvider } from "./drawer-context";
import { Drawer } from "src/drawerx/drawer";
import { render } from "../tests/testing-library";

describe("DrawerContext", () => {
  mockConsoleError();

  it("would throw an error if no Provider is defined", () => {
    expect(() =>
      render(
        <Box>
          <Drawer>
            <DrawerContent nav={mockDrawerNavigation} />
          </Drawer>
        </Box>,
      ),
    ).toThrow(UndefinedProvider);
  });
});
