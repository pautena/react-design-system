import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Drawer, Item } from "./drawer";
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
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Drawer>;

const Template = createTemplate(Drawer);

export const Default = Template.bind({});
Default.args = {
  items,
  open:true
};


