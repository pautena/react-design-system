import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBar } from "./app-bar";
import {DrawerProvider} from '../drawer';

export default {
  title: "Components/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template = createTemplate((args)=>{

  return (
    <DrawerProvider>
      <AppBar {...args}/>
    </DrawerProvider>
  )
});

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  menu: true
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
  menu: false
};

export const WithProfile = Template.bind({});
WithProfile.args = {
  title: "Lorem ipsum",
  menu: true,
  profile: {
    name: "Test user"
  }
};


