import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";
import { ContentPlaceholder } from "../placeholders";
import { AppBar } from "../app-bars";
import { DrawerState } from "./drawer.types";

interface DrawerDemoArgs {
  initialState: DrawerState;
  closeState: DrawerState;
  moveWithDrawer: boolean;
  drawerVariant?: "permanent" | "persistent" | "temporary";
}

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
      <ContentPlaceholder p={3} />
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
