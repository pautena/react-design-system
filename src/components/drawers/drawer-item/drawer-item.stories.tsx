import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../../storybook";
import { DrawerItem } from "./drawer-item";
import DiamondIcon from "@mui/icons-material/Diamond";
import { withMemoryRouter } from "~/storybook";

export default {
  title: "Components/Drawers/DrawerItem",
  component: DrawerItem,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerItem>;
type Story = StoryObj<typeof DrawerItem>;

export const OnlyText: Story = {
  args: {
    text: "Lorem ipsum",
    href: "/items/1",
  },
};

export const WithIcon: Story = {
  args: {
    ...OnlyText.args,
    icon: <DiamondIcon />,
  },
};

export const WithAvatar: Story = {
  args: {
    ...OnlyText.args,
    avatar: {
      src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
      alt: "Avatar 1",
    },
  },
};

export const WithLabel: Story = {
  args: {
    ...WithIcon.args,
    label: {
      text: "new",
      variant: "info",
    },
  },
};

export const WithBullet: Story = {
  args: {
    ...WithIcon.args,
    bullet: {
      variant: "error",
    },
  },
};

export const Selected: Story = {
  args: {
    ...WithBullet.args,
    selected: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...WithBullet.args,
    size: "small",
  },
};

export const SizeSmallWithLabel: Story = {
  args: {
    ...WithLabel.args,
    size: "small",
  },
};

export const SizeSmallWithAvatar: Story = {
  args: {
    ...WithAvatar.args,
    size: "small",
  },
};

export const SizeSmallSelected: Story = {
  args: {
    ...Selected.args,
    size: "small",
  },
};
