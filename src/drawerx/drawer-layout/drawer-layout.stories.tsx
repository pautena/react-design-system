import { Meta, StoryObj } from "@storybook/react";
import { DrawerLayout } from "./drawer-layout";
import { mockDrawerNavigation } from "../drawer/drawer.mock";
import { DrawerContent } from "../drawer-content";
import { Drawer } from "../drawer";
import { DrawerAppBar } from "../drawer-app-bar";
import { ContentPlaceholder } from "../../content-placeholder";

const baseProps = {
  title: "Lorem ipsum",
  navigation: mockDrawerNavigation,
};

export default {
  title: "Layouts/DrawerLayout",
  component: DrawerLayout,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <DrawerLayout {...args}>
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerAppBar title="Lorem ipsum" />
      <ContentPlaceholder p={3} />
    </DrawerLayout>
  ),
} satisfies Meta<typeof DrawerLayout>;
type Story = StoryObj<typeof DrawerLayout>;

export const Temporary: Story = {
  args: {
    ...baseProps,
    drawerProviderProps: {
      variant: "temporary",
    },
  },
};

export const Persistent: Story = {
  args: {
    ...baseProps,
    drawerProviderProps: {
      variant: "persistent",
    },
  },
};

export const Clipped: Story = {
  args: {
    ...baseProps,
    drawerProviderProps: {
      variant: "clipped",
    },
  },
};

export const Mini: Story = {
  args: {
    ...baseProps,
    drawerProviderProps: {
      variant: "mini",
    },
  },
};

export const CustomLinkComponent: Story = {
  args: {
    ...baseProps,
    drawerProviderProps: {
      LinkComponent: "b",
    },
  },
};
