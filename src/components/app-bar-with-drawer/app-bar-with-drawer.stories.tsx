import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBarWithDrawer } from "./app-bar-with-drawer";
import {ContentPlaceholder} from '../../tests';
import { Item } from "../drawer";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const items:Item[] = [{
  id:'item1',
  name:"Item 1",
  icon: <DiamondIcon/>
},{
  id:"item2",
  name:"Item 2",
  icon: <MenuBookIcon/>
}]

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
  drawerProps: {items},
  appBarProps: {
    title:"Lorem ipsum"
  }
};


