import type { Meta, StoryObj } from "@storybook/react";
import { Folder } from "lucide-react";
import { mockLinkNoIconDrawerNavigationItem } from "@/components/navigation/drawer/drawer.mock";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import type { DrawerSize, DrawerState } from "@/types/drawer.types";
import { withDrawerMenu } from "@/storybook";
import { DrawerItem, type DrawerItemProps } from "./drawer-item";

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
  decorators: [withDrawerMenu],
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
      icon: <Folder />,
    },
  },
};
