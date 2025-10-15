import Box from "@mui/material/Box";
import { mockConsoleError } from "../../tests/mocks";
import { render } from "../../tests/testing-library";
import { Drawer } from "../drawer";
import { mockDrawerNavigation } from "../drawer/drawer.mock";
import { DrawerContent } from "../drawer-content";
import { UndefinedProvider } from "./drawer-context";

describe("DrawerContext", () => {
  mockConsoleError();

  it("would throw an error if no Provider is defined", () => {
    expect(() =>
      render(
        <Box>
          <Drawer>
            <DrawerContent navigation={mockDrawerNavigation} />
          </Drawer>
        </Box>,
      ),
    ).toThrow(UndefinedProvider);
  });
});
