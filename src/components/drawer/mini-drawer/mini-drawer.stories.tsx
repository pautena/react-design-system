import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { MiniDrawer } from "../mini-drawer";
import {mockNav} from '../drawer.mock'
import { DrawerContent } from "../drawer-content";

export default {
  title: "Components/MiniDrawer",
  component: MiniDrawer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MiniDrawer>;

const Template = createTemplate(({nav,open})=>(
  <MiniDrawer open={open} onDrawerClose={()=>null}>
    <DrawerContent nav={nav} open={open}/>
  </MiniDrawer>
));

export const Default = Template.bind({});
Default.args = {
  nav:mockNav,
  open:true
};


