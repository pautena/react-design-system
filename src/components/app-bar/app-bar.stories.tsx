import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBar } from "./app-bar";
import {ContentPlaceholder} from '../../tests';

export default {
  title: "Components/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template = createTemplate(AppBar);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  menu: true,
  open: false
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  title: "Lorem ipsum",
  search: true,
  menu: true,
  open: false
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  menu: true,
  open: false
};


export const WihtoutMenu = Template.bind({});
WihtoutMenu.args = {
  title: "Lorem ipsum",
  menu: false
};

export const WithMenuOpened = Template.bind({});
WithMenuOpened.args = {
  title: "Lorem ipsum",
  menu:true,
  open:true
};

export const WithProfile = Template.bind({});
WithProfile.args = {
  title: "Lorem ipsum",
  menu: true,
  open: false,
  profile: {
    name: "Test user"
  }
};


