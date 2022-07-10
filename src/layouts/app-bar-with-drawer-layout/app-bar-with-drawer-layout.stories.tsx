import { ComponentMeta } from "@storybook/react";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";
import {ContentPlaceholder} from '../../tests';
import { mockNav } from "../../components/drawer/drawer.mock";
import { MiniAppBar } from "../../components/app-bar";
import { DrawerContent, MiniDrawer } from "../../components";

export default {
  title: "Layouts/AppBarWithDrawer",
  component: AppBarWithDrawerLayout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBarWithDrawerLayout>;

export const MiniDrawerStory = ()=> (
  <AppBarWithDrawerLayout 
    drawer={<MiniDrawer>
      <DrawerContent nav={mockNav}/>
    </MiniDrawer>
    } 
    appBar={<MiniAppBar
      title="Lorem ipsum"
      onClickSignOut={()=> null}
    />}
  >
    <ContentPlaceholder/>
  </AppBarWithDrawerLayout>
);
MiniDrawerStory.storyName = "Mini drawer"
