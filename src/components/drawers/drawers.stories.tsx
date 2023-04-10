import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";
import { ContentPlaceholder } from "../placeholders";
import { AppBar } from "../app-bars";
import { DrawerState, DrawerVariant } from "./drawer.types";

interface DrawerDemoArgs {
  initialState: DrawerState;
  closeState: DrawerState;
  moveWithDrawer: boolean;
  variant: DrawerVariant;
}

export default {
  title: "Components/Drawers/Drawer demo",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, moveWithDrawer, closeState, variant }) => (
    <DrawerProvider initialState={initialState} variant={variant}>
      <AppBar title="Drawer demo" menu moveWithDrawer={moveWithDrawer} />
      <Drawer closeState={closeState}>
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
    variant: "temporary",
  },
};

export const MiniDrawer: Story = {
  args: {
    initialState: "collapse",
    moveWithDrawer: true,
    closeState: "collapse",
    variant: "mini",
  },
};
