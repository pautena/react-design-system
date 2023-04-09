import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AppBar } from "./app-bar";
import { DrawerProvider } from "../../drawers/drawer";
import { AppBarProps } from "./app-bar.types";

export default {
  title: "Components/AppBars/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
  render: (args: AppBarProps) => {
    return (
      <DrawerProvider>
        <AppBar {...args} />
      </DrawerProvider>
    );
  },
} satisfies Meta<typeof AppBar>;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
    menu: true,
  },
};

export const WithSearch: Story = {
  args: {
    title: "Lorem ipsum",
    search: true,
    menu: true,
  },
};

export const WithoutTitle: Story = {
  args: { menu: true },
};

export const WihtoutMenu: Story = {
  args: {
    title: "Lorem ipsum",
    menu: false,
  },
};

export const WithProfile: Story = {
  args: {
    title: "Lorem ipsum",
    menu: true,
    profile: {
      name: "Test user",
    },
  },
};
