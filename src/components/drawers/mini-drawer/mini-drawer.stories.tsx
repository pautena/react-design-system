import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MiniDrawer, miniDrawerSubmenuVariant } from ".";
import { mockNav } from "../drawer.mock";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer-provider/drawer.provider";
import { DrawerNavigation, DrawerSize } from "../drawer.types";
import { withMemoryRouter } from "../../../storybook";

interface Props {
  size?: DrawerSize;
  selectedItem: string;
  open: boolean;
  nav: DrawerNavigation;
}

const DemoMiniDrawer = ({ nav, open, selectedItem, size = "medium" }: Props) => (
  <DrawerProvider initialOpen={open} submenuVariant={miniDrawerSubmenuVariant}>
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
    nav: mockNav,
    open: true,
  },
};

export const Closed: Story = {
  args: {
    ...OpenMedium.args,
    open: false,
  },
};

export const Small: Story = {
  args: {
    ...OpenMedium.args,
    size: "small",
  },
};
