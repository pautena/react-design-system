import type { Meta, StoryObj } from "@storybook/react";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import type { DrawerSize, DrawerState } from "@/types/drawer.types";
import { withDrawerMenu } from "@/storybook";
import { DrawerSubheader, type DrawerSubheaderProps } from "./drawer-subheader";

type DrawerSubheaderStoryArgs = DrawerSubheaderProps & {
  size?: DrawerSize;
  initialState?: DrawerState;
};

export default {
  title: "Navigation/DrawerSubheader",
  component: DrawerSubheader,
  decorators: [withDrawerMenu],
  parameters: {
    layout: "centered",
  },
  render: ({ size = "medium", initialState = "open", ...args }) => (
    <DrawerProvider size={size} initialState={initialState}>
      <DrawerSubheader {...args} />
    </DrawerProvider>
  ),
} satisfies Meta<DrawerSubheaderStoryArgs>;

type Story = StoryObj<DrawerSubheaderStoryArgs>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
