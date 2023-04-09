import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AppBarWithDrawerLayout } from "./app-bar-with-drawer-layout";
import { mockDrawerNavigation } from "../../components/drawers/drawer.mock";
import { AppBar } from "../../components/app-bars";
import { ContentPlaceholder, DrawerContent, Drawer } from "../../components";
import { withMemoryRouter } from "~/storybook";

export default {
  title: "Layouts/AppBarWithDrawer",
  component: AppBarWithDrawerLayout,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <AppBarWithDrawerLayout>
      <Drawer>
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
      <AppBar title="Lorem ipsum" moveWithDrawer menu />
      <ContentPlaceholder p={3} />
    </AppBarWithDrawerLayout>
  ),
} satisfies Meta<typeof AppBarWithDrawerLayout>;
type Story = StoryObj<typeof AppBarWithDrawerLayout>;

export const MiniDrawerStory: Story = {
  name: "Mini drawer",
};
