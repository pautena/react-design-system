import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider, useDrawer } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";
import { ContentPlaceholder } from "../placeholders";
import { AppBar } from "../app-bars";
import { DrawerState } from "./drawer.types";
import { Box, Paper, Typography } from "@mui/material";

interface DrawerDemoArgs {
  initialState: DrawerState;
  closeState: DrawerState;
  moveWithDrawer: boolean;
  drawerVariant?: "permanent" | "persistent" | "temporary";
}

const DrawerProviderInfo = () => {
  const { state } = useDrawer();

  return (
    <Box component={Paper} position="fixed" bottom={20} right={20} p={2}>
      <Typography variant="h6">Drawer provider info</Typography>
      <Typography>State: {state}</Typography>
    </Box>
  );
};

export default {
  title: "Components/Drawers/Drawer demo",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, moveWithDrawer, closeState, drawerVariant = "temporary" }) => (
    <DrawerProvider initialState={initialState}>
      <AppBar title="Drawer demo" menu moveWithDrawer={moveWithDrawer} />
      <Drawer variant={drawerVariant} closeState={closeState}>
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
      <ContentPlaceholder p={3}>{<DrawerProviderInfo />}</ContentPlaceholder>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;
type Story = StoryObj<DrawerDemoArgs>;

export const Default: Story = {
  args: {
    initialState: "close",
    moveWithDrawer: false,
    closeState: "close",
  },
};

export const MiniDrawer: Story = {
  args: {
    initialState: "collapse",
    moveWithDrawer: true,
    closeState: "collapse",
    drawerVariant: "permanent",
  },
};
