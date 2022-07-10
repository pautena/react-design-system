import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";
import {ContentPlaceholder} from '../../tests';
import { mockNav } from "../../components/drawer/drawer.mock";
import { MiniAppBar } from "../../components/app-bar";
import { useState } from "react";
import { DrawerContent, MiniDrawer } from "../../components/drawer";

export default {
  title: "Layouts/AppBarWithDrawer",
  component: AppBarWithDrawerLayout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBarWithDrawerLayout>;

export const MiniDrawerStory = ()=>{
  const [open, setOpen] = useState(false);
  
  return (
    <AppBarWithDrawerLayout 
      drawer={<MiniDrawer
        variant="permanent"
        open={open}
        onDrawerClose={()=>setOpen(false)}
      >
        <DrawerContent nav={mockNav} open={open}/>
      </MiniDrawer>
      } 
      appBar={<MiniAppBar
        title="Lorem ipsum"
        position="fixed"
        menu
        open={open}
        onClickDrawerMenu={()=>setOpen(true)}
        onClickSignOut={()=> null}
      />}
    >
      <ContentPlaceholder/>
    </AppBarWithDrawerLayout>
  );
};
MiniDrawerStory.storyName = "Mini drawer"
