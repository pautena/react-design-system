import type { Meta, StoryObj } from "@storybook/react";
import { ContentPlaceholder } from "../../ContentPlaceholder";
import { mockDrawerNavigation } from "../Drawer/Drawer.mock";
import DrawerLayout from "./DrawerLayout";

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
      <ContentPlaceholder p={3} />
    </DrawerLayout>
  ),
} satisfies Meta<typeof DrawerLayout>;
type Story = StoryObj<typeof DrawerLayout>;

export const Temporary: Story = {
  args: {
    ...baseProps,
    variant: "temporary",
  },
};

export const Persistent: Story = {
  args: {
    ...baseProps,
    variant: "persistent",
  },
};

export const NoClipped: Story = {
  args: {
    ...baseProps,
    variant: "mini",
    clipped: false,
  },
};

export const Mini: Story = {
  args: {
    ...baseProps,
    variant: "mini",
  },
};

export const MiniSmall: Story = {
  args: {
    ...baseProps,
    variant: "mini",
    size: "small",
  },
};

export const CustomLinkComponent: Story = {
  args: {
    ...baseProps,
    LinkComponent: "b",
  },
};
