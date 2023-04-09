import React from "react";
import { Meta } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";
import { Box } from "@mui/material";
import { ContentPlaceholder } from "../placeholders";
import { MiniAppBar } from "../app-bars";

export default {
  title: "Components/Drawers/Drawer demo",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export const MiniDrawer = () => {
  return (
    <DrawerProvider initialState="collapse">
      <MiniAppBar title="Drawer demo" menu />
      <Drawer variant="permanent" closeState="collapse">
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <ContentPlaceholder p={3} />
      </Box>
    </DrawerProvider>
  );
};
