import type { Meta, StoryObj } from "@storybook/react";
import { DrawerProvider } from "../DrawerContext";
import DrawerAppBar from "./DrawerAppBar";

export default {
  title: "Navigation/DrawerAppBar",
  component: DrawerAppBar,
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => (
    <DrawerProvider>
      <DrawerAppBar {...args} />
    </DrawerProvider>
  ),
} satisfies Meta<typeof DrawerAppBar>;
type Story = StoryObj<typeof DrawerAppBar>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
  },
};

export const WithoutTitle: Story = {};
