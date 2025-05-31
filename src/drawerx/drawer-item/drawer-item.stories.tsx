import DiamondIcon from "@mui/icons-material/Diamond";
import type { Meta, StoryObj } from "@storybook/react";
import { DrawerProvider } from "../drawer-context";
import type { DrawerSize, DrawerState } from "../drawer.types";
import {
  mockLinkNoIconDrawerNavigationItem,
  mockMenuDrawerNavigationItem,
} from "../drawer/drawer.mock";
import { DrawerItem, type DrawerItemProps } from "./drawer-item";

type DrawerItemStoryArgs = DrawerItemProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
  size?: DrawerSize;
};

export default {
  title: "Components/Navigation/DrawerItem",
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
      icon: <DiamondIcon />,
    },
  },
};

export const ItemWithAvatar: Story = {
  name: "Item (avatar,open)",
  args: {
    item: {
      ...mockLinkNoIconDrawerNavigationItem,
      avatar: {
        src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
        alt: "Avatar 1",
      },
    },
  },
};

export const ItemWithLabel: Story = {
  name: "Item (icon,label,open)",
  args: {
    item: {
      ...mockLinkNoIconDrawerNavigationItem,
      icon: <DiamondIcon />,
      label: {
        text: "new",
        variant: "info",
      },
    },
  },
};

export const ItemWithBullet: Story = {
  name: "Item (icon,bullet,open)",
  args: {
    item: {
      ...mockLinkNoIconDrawerNavigationItem,
      icon: <DiamondIcon />,
      bullet: {
        variant: "error",
      },
    },
  },
};

export const ItemSelected: Story = {
  name: "Item (icon,label,selected,open)",
  args: {
    ...ItemWithLabel.args,
    selectedItemId: mockLinkNoIconDrawerNavigationItem.id,
  },
};

export const ItemSizeSmallWithIcon: Story = {
  name: "Item (icon,label,small,open)",
  args: {
    ...ItemWithLabel.args,
    size: "small",
  },
};

export const ItemSizeSmallWithAvatar: Story = {
  name: "Item (avatar,small,open)",
  args: {
    ...ItemWithAvatar.args,
    size: "small",
  },
};

export const ItemSizeSmallSelected: Story = {
  name: "Item (icon,label,selected,small,open)",
  args: {
    ...ItemSelected.args,
    size: "small",
  },
};

export const MenuNotSelected: Story = {
  name: "Menu (open)",
  args: {
    item: mockMenuDrawerNavigationItem,
  },
};

export const MenuSelected: Story = {
  name: "Menu (selected,open)",
  args: {
    ...MenuNotSelected.args,
    selectedItemId: mockMenuDrawerNavigationItem.id,
  },
};

export const MenuNoSelectedSmall: Story = {
  name: "Menu (small,open)",
  args: {
    ...MenuNotSelected.args,
    size: "small",
  },
};

export const MenuSelectedSmall: Story = {
  name: "Menu (small,selected,open)",
  args: {
    ...MenuSelected.args,
    size: "small",
  },
};
