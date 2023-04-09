import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MiniDrawer } from "./mini-drawer";
import { mockDrawerNavigation } from "../drawer.mock";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer-provider/drawer.provider";
import { DrawerNavigation, DrawerSize, DrawerState } from "../drawer.types";
import { withMemoryRouter } from "../../../storybook";

interface Props {
  size?: DrawerSize;
  selectedItem: string;
  state: DrawerState;
  nav: DrawerNavigation;
}

const DemoMiniDrawer = ({ nav, state, selectedItem, size = "medium" }: Props) => (
  <DrawerProvider initialState={state}>
    <MiniDrawer>
      <DrawerContent nav={nav} size={size} selectedItem={selectedItem} />
    </MiniDrawer>
  </DrawerProvider>
);

export default {
  title: "Components/Drawers/MiniDrawer",
  component: DemoMiniDrawer,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DemoMiniDrawer>;
type Story = StoryObj<typeof DemoMiniDrawer>;

export const OpenMedium: Story = {
  args: {
    selectedItem: "item2.3.2",
    nav: mockDrawerNavigation,
    state: "open",
  },
};

export const Closed: Story = {
  args: {
    ...OpenMedium.args,
    state: "close",
  },
};

export const Small: Story = {
  args: {
    ...OpenMedium.args,
    size: "small",
  },
};
