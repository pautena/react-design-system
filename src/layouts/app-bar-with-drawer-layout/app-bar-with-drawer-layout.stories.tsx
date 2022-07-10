import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";
import {ContentPlaceholder} from '../../tests';
import { mockNav } from "../../components/drawer/drawer.mock";
import { MiniAppBar } from "../../components/app-bar";
import { useState } from "react";
import { MiniDrawer } from "../../components/drawer";

export default {
  title: "Layouts/AppBarWithDrawer",
  component: AppBarWithDrawerLayout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBarWithDrawerLayout>;

const Template = createTemplate(({drawerProps,appBarProps})=> {
  const [open, setOpen] = useState(false);
  
  return (
    <AppBarWithDrawerLayout 
      drawer={<MiniDrawer
        variant="permanent"
        open={open}
        onDrawerClose={()=>setOpen(false)}
        {...drawerProps}
      />} 
      appBar={<MiniAppBar
        position="fixed"
        menu
        open={open}
        onClickDrawerMenu={()=>setOpen(true)}
        {...appBarProps}
      />}
    >
      <ContentPlaceholder/>
    </AppBarWithDrawerLayout>
  );
});

export const Default = Template.bind({});
Default.args = {
  drawerProps: {nav:mockNav},
  appBarProps: {
    title:"Lorem ipsum"
  }
};

