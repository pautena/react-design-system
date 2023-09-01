import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerAppBar } from "./DrawerAppBar";
import { DrawerProvider } from "../DrawerProvider";

export default {
  title: "Components/Drawers/DrawerAppBar",
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
