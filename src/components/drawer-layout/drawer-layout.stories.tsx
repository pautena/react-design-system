import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "@/components/content";
import { mockDrawerNavigation } from "@/components/drawerx/drawer.mock";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { DrawerLayout } from "./drawer-layout";

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
      <Content data-testid="content-placeholder-test" className="p-3">
        <SkeletonGrid />
      </Content>
    </DrawerLayout>
  ),
} satisfies Meta<typeof DrawerLayout>;

type Story = StoryObj<typeof DrawerLayout>;

export const MiniClosed: Story = {
  args: {
    ...baseProps,
    initialState: "close",
  },
};

export const Open: Story = {
  args: {
    ...MiniClosed.args,
    initialState: "open",
  },
};

export const NoClipped: Story = {
  args: {
    ...baseProps,
    clipped: false,
  },
};

export const Small: Story = {
  args: {
    ...baseProps,
    size: "small",
  },
};

export const CustomLinkComponent: Story = {
  args: {
    ...baseProps,
    LinkComponent: "b",
  },
};
