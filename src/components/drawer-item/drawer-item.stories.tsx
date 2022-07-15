import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DrawerItem } from "./drawer-item";
import DiamondIcon from "@mui/icons-material/Diamond";
import { withContainer } from "../../storybook";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Drawers/DrawerItem",
  component: DrawerItem,
  decorators: [withRouter, withContainer({ width: 250 })],
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
  text: "Lorem ipsum",
  href: "/items/1",
  icon: <DiamondIcon />,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  text: "Lorem ipsum",
  href: "/items/1",
  avatar: {
    src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
    alt: "Avatar 1",
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  text: "Lorem ipsum",
  href: "/items/1",
  icon: <DiamondIcon />,
  label: {
    text: "new",
    variant: "info",
  },
};

export const WithBullet = Template.bind({});
WithBullet.args = {
  text: "Lorem ipsum",
  href: "/items/1",
  icon: <DiamondIcon />,
  bullet: {
    variant: "error",
  },
};
