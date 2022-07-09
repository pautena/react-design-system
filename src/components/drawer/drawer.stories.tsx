import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Drawer } from "./drawer";
import {mockNav} from './drawer.mock'

export default {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Drawer>;

const Template = createTemplate(Drawer);

export const Default = Template.bind({});
Default.args = {
  nav:mockNav,
  open:true
};


