import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer } from "../../../storybook";
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
} as ComponentMeta<typeof DrawerItem>;

const Template = createTemplate(DrawerItem);

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Lorem ipsum",
  href: "/items/1",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...OnlyText.args,
  icon: <DiamondIcon />,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  ...OnlyText.args,
  avatar: {
    src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
    alt: "Avatar 1",
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...WithIcon.args,
  label: {
    text: "new",
    variant: "info",
  },
};

export const WithBullet = Template.bind({});
WithBullet.args = {
  ...WithIcon.args,
  bullet: {
    variant: "error",
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...WithBullet.args,
  selected: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...WithBullet.args,
  size: "small",
};

export const SizeSmallWithLabel = Template.bind({});
SizeSmallWithLabel.args = {
  ...WithLabel.args,
  size: "small",
};

export const SizeSmallWithAvatar = Template.bind({});
SizeSmallWithAvatar.args = {
  ...WithAvatar.args,
  size: "small",
};

export const SizeSmallSelected = Template.bind({});
SizeSmallSelected.args = {
  ...Selected.args,
  size: "small",
};
