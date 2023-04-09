import { Meta, StoryObj } from "@storybook/react";
import { withMemoryRouter, withContainer } from "~/storybook";
import { DrawerItem } from "./drawer-item";
import DiamondIcon from "@mui/icons-material/Diamond";
import React from "react";
import {
  mockCollapsableDrawerNavigationItem,
  mockLinkNoIconDrawerNavigationItem,
} from "../drawer.mock";

export default {
  title: "Components/Drawers/DrawerItem",
  component: DrawerItem,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerItem>;
type Story = StoryObj<typeof DrawerItem>;

export const LinkOnlyText: Story = {
  args: {
    item: mockLinkNoIconDrawerNavigationItem,
  },
};

export const LinkWithIcon: Story = {
  args: {
    item: {
      ...mockLinkNoIconDrawerNavigationItem,
      icon: <DiamondIcon />,
    },
  },
};

export const LinkWithAvatar: Story = {
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

export const LinkWithLabel: Story = {
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

export const LinkWithBullet: Story = {
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

export const LinkSelected: Story = {
  args: {
    ...LinkWithLabel.args,
    selectedItem: mockLinkNoIconDrawerNavigationItem.id,
  },
};

export const LinkSizeSmall: Story = {
  args: {
    ...LinkWithIcon.args,
    size: "small",
  },
};

export const LinkSizeSmallWithLabel: Story = {
  args: {
    ...LinkWithLabel.args,
    size: "small",
  },
};

export const LinkSizeSmallWithAvatar: Story = {
  args: {
    ...LinkWithAvatar.args,
    size: "small",
  },
};

export const LinkSizeSmallSelected: Story = {
  args: {
    ...LinkSelected.args,
    size: "small",
  },
};

export const CollapsbleNotSelected: Story = {
  args: {
    item: mockCollapsableDrawerNavigationItem,
  },
};

export const CollapsbleSelected: Story = {
  args: {
    ...CollapsbleNotSelected.args,
    selectedItem: mockCollapsableDrawerNavigationItem.id,
  },
};

export const CollapsblePopoverSubmenu: Story = {
  args: {
    ...CollapsbleSelected.args,
    submenuVariant: "popover",
  },
};

export const CollapsbleNoSelectedSmall: Story = {
  args: {
    ...CollapsbleNotSelected.args,
    size: "small",
  },
};

export const CollapsbleSelectedSmall: Story = {
  args: {
    ...CollapsbleSelected.args,
    size: "small",
  },
};
