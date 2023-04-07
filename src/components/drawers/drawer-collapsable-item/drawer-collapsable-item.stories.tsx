import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../../storybook";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { withMemoryRouter } from "~/storybook";

export default {
  title: "Components/Drawers/DrawerCollapsableItem",
  component: DrawerCollapsableItem,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerCollapsableItem>;
type Story = StoryObj<typeof DrawerCollapsableItem>;

export const NotSelected: Story = {
  args: {
    text: "Item 2.3",
    icon: <AccountTreeIcon />,
    items: [
      {
        id: "item2.3.1",
        text: "Item 2.3.1",
        href: "/items/2-3-1",
        icon: <DiamondIcon />,
      },
      {
        id: "item2.3.2",
        text: "Item 2.3.2",
        href: "/items/2-3-2",
        icon: <MenuBookIcon />,
      },
      {
        id: "item2.3.3",
        text: "Item 2.3.3",
        href: "/items/2-3-3",
        icon: <DiamondIcon />,
      },
    ],
  },
};

export const Selected: Story = {
  args: {
    ...NotSelected.args,
    selected: true,
    selectedItem: "item2.3.3",
  },
};

export const NoSelectedSmall: Story = {
  args: {
    ...NotSelected.args,
    size: "small",
  },
};

export const SelectedSmall: Story = {
  args: {
    ...Selected.args,
    size: "small",
  },
};
