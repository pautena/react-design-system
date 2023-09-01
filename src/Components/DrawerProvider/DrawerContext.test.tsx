import { Box } from "@mui/material";
import React from "react";
import { mockConsoleError } from "~/Tests/Mocks";
import { DrawerContent } from "../DrawerContent";
import { mockDrawerNavigation } from "../Drawer.mock";
import { UndefinedProvider } from "./DrawerContext";
import { Drawer } from "../Drawer";
import { render } from "~/Tests/TestingLibrary";

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
