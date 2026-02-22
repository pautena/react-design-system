import type { Meta, StoryObj } from "@storybook/react";
import { DrawerProvider } from "@/components/drawer-context";
import type { DrawerSize } from "@/components/drawerx/drawer.types";
import { withContainer } from "../../storybook";
import DrawerSubheader, { type DrawerSubheaderProps } from "./drawer-subheader";

type DrawerSubheaderStoryArgs = DrawerSubheaderProps & {
  size?: DrawerSize;
};

export default {
  title: "Navigation/DrawerSubheader",
  component: DrawerSubheader,
  decorators: [withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
  render: ({ size = "medium", ...args }) => (
    <DrawerProvider size={size}>
      <DrawerSubheader {...args} />
    </DrawerProvider>
  ),
} satisfies Meta<DrawerSubheaderStoryArgs>;

type Story = StoryObj<DrawerSubheaderStoryArgs>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Lorem ipsum",
    size: "small",
  },
};
