import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";
import { mockNav } from "../../components/drawers/drawer/drawer.mock";
import { MiniAppBar } from "../../components/app-bars/app-bar";
import { ContentPlaceholder, DrawerContent, MiniDrawer } from "../../components";
import { withMemoryRouter } from "~/storybook";

export default {
  title: "Layouts/AppBarWithDrawer",
  component: AppBarWithDrawerLayout,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBarWithDrawerLayout>;

export const MiniDrawerStory = () => (
  <AppBarWithDrawerLayout>
    <MiniDrawer>
      <DrawerContent nav={mockNav} />
    </MiniDrawer>
    <MiniAppBar title="Lorem ipsum" onClickSignOut={() => null} />
    <ContentPlaceholder p={3} />
  </AppBarWithDrawerLayout>
);
MiniDrawerStory.storyName = "Mini drawer";
