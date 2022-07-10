import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { MiniDrawer } from "../mini-drawer";
import {mockNav} from '../drawer.mock'
import { DrawerContent } from "../../drawer-content";
import {DrawerProvider} from '../drawer.provider'

export default {
  title: "Drawers/MiniDrawer",
  component: MiniDrawer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MiniDrawer>;

const Template = createTemplate(({nav,open})=>(
  <DrawerProvider initialOpen={open}>
    <MiniDrawer>
      <DrawerContent nav={nav}/>
    </MiniDrawer>
  </DrawerProvider>
));

export const Default = Template.bind({});
Default.args = {
  nav:mockNav,
  open:true
};


