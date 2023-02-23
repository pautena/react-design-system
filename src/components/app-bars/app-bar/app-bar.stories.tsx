import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { AppBar } from "./app-bar";
import { DrawerProvider } from "../../drawers/drawer";
import { AppBarProps } from "./app-bar.types";

export default {
  title: "Components/AppBars/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template = createTemplate((args: AppBarProps) => {
  return (
    <DrawerProvider>
      <AppBar {...args} />
    </DrawerProvider>
  );
});

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  menu: true,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  title: "Lorem ipsum",
  search: true,
  menu: true,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  menu: true,
};

export const WihtoutMenu = Template.bind({});
WihtoutMenu.args = {
  title: "Lorem ipsum",
  menu: false,
};

export const WithProfile = Template.bind({});
WithProfile.args = {
  title: "Lorem ipsum",
  menu: true,
  profile: {
    name: "Test user",
  },
};
