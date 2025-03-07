import { Meta, StoryObj } from "@storybook/react";
import { DrawerSubheader, DrawerSubheaderProps } from "./drawer-subheader";
import { withContainer } from "../../storybook";
import { DrawerProvider } from "../drawer-context";
import { DrawerSize } from "../drawer.types";

type DrawerSubheaderStoryArgs = DrawerSubheaderProps & {
  size?: DrawerSize;
};

export default {
  title: "Components/Drawers/DrawerSubheader",
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

export const Medium: Story = {
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
