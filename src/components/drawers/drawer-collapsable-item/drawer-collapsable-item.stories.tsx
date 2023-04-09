import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../../storybook";
import { DrawerCollapsableItem } from "./drawer-collapsable-item";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { withMemoryRouter } from "~/storybook";
import { mockCollapsableDrawerNavigationItem } from "../drawer.mock";

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
  args: mockCollapsableDrawerNavigationItem,
};

export const Selected: Story = {
  args: {
    ...NotSelected.args,
    selected: true,
    selectedItem: "item2.3.4.2.2",
  },
};

export const PopoverSubmenu: Story = {
  args: {
    ...Selected.args,
    submenuVariant: "popover",
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
