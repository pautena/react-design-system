import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { withMemoryRouter } from "~/storybook";
import { Drawer, DrawerProvider } from "./drawer";
import { mockDrawerNavigation } from "./drawer.mock";
import { ContentPlaceholder } from "../placeholders";
import { DrawerState, DrawerVariant } from "./drawer.types";
import { DrawerAppBar } from "./drawer-app-bar";

interface DrawerDemoArgs {
  initialState: DrawerState;
  closeState: DrawerState;
  variant: DrawerVariant;
}

export default {
  title: "Components/Drawers/Drawer demo",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, closeState, variant }) => (
    <DrawerProvider initialState={initialState} variant={variant}>
      <DrawerAppBar title="Drawer demo" />
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
    closeState: "close",
    variant: "temporary",
  },
};

export const MiniDrawer: Story = {
  args: {
    initialState: "collapse",
    closeState: "collapse",
    variant: "mini",
  },
};
