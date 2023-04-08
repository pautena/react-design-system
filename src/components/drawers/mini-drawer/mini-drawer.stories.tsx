import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MiniDrawer } from ".";
import { mockNav } from "../drawer/drawer.mock";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer/drawer.provider";
import { DrawerNavigation, DrawerSize } from "../drawer.types";
import { withMemoryRouter } from "../../../storybook";

interface Props {
  size?: DrawerSize;
  open: boolean;
  nav: DrawerNavigation;
}

const DemoMiniDrawer = ({ nav, open, size = "medium" }: Props) => (
  <DrawerProvider initialOpen={open}>
    <MiniDrawer>
      <DrawerContent nav={nav} size={size} />
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

export const Default: Story = {
  args: {
    nav: mockNav,
    open: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
