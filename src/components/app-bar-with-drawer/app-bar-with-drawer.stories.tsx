import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBarWithDrawer } from "./app-bar-with-drawer";
import {ContentPlaceholder} from '../../tests';
import { mockNav } from "../drawer/drawer.mock";

export default {
  title: "Components/AppBarWithDrawer",
  component: AppBarWithDrawer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBarWithDrawer>;

const Template = createTemplate(({drawerProps,appBarProps})=> (
  <AppBarWithDrawer drawerProps={drawerProps} appBarProps={appBarProps}>
    <ContentPlaceholder/>
  </AppBarWithDrawer>
));

export const Default = Template.bind({});
Default.args = {
  drawerProps: {nav:mockNav},
  appBarProps: {
    title:"Lorem ipsum"
  }
};


