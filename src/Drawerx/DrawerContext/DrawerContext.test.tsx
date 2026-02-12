import Box from "@mui/material/Box";
import { mockConsoleError } from "../../tests/mocks";
import { render } from "../../tests/testing-library";
import { Drawer } from "../Drawer";
import { mockDrawerNavigation } from "../Drawer/Drawer.mock";
import { DrawerContent } from "../DrawerContent";
import { UndefinedProvider } from "./DrawerContext";

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
