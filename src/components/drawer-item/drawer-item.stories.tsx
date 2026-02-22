import type { Meta, StoryObj } from "@storybook/react";
import { Diamond } from "lucide-react";
import { DrawerProvider } from "@/components/drawer-context";
import {
  mockLinkNoIconDrawerNavigationItem,
  mockMenuDrawerNavigationItem,
} from "@/components/drawerx/drawer.mock";
import type {
  DrawerSize,
  DrawerState,
} from "@/components/drawerx/drawer.types";
import DrawerItem, { type DrawerItemProps } from "./drawer-item";

type DrawerItemStoryArgs = DrawerItemProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
  size?: DrawerSize;
};

export default {
  title: "Navigation/DrawerItem",
  component: DrawerItem,
  parameters: {
    layout: "centered",
  },
  render: ({
    initialState = "open",
    size = "medium",
    selectedItemId,
    ...args
  }) => (
    <DrawerProvider
      initialState={initialState}
      selectedItemId={selectedItemId}
      size={size}
    >
      <DrawerItem {...args} />
    </DrawerProvider>
  ),
} satisfies Meta<DrawerItemStoryArgs>;

type Story = StoryObj<DrawerItemStoryArgs>;

export const Default: Story = {
  name: "Item (open)",
  args: {
    item: mockLinkNoIconDrawerNavigationItem,
  },
};

export const ItemWithIcon: Story = {
  name: "Item (icon,open)",
  args: {
    item: {
      ...mockLinkNoIconDrawerNavigationItem,
      icon: <Diamond />,
    },
  },
};

export const MenuNotSelected: Story = {
  name: "Menu (open)",
  args: {
    item: mockMenuDrawerNavigationItem,
  },
};
