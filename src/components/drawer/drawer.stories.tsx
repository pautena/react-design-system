import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withMemoryRouter } from "~/Storybook";
import { DrawerProvider } from "../DrawerProvider";
import { mockDrawerNavigation } from "../Drawer.mock";
import { DrawerState } from "../Drawer.types";
import { DrawerContent } from "../DrawerContent";
import { Drawer } from "./Drawer";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

export default {
  title: "Components/Drawers/Drawer",
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider initialState={initialState} variant="mini" selectedItemId={selectedItemId}>
      <Drawer>
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;
type Story = StoryObj<DrawerDemoArgs>;

export const Default: Story = {
  args: {
    selectedItemId: "item2.3.2",
    initialState: "open",
  },
};
