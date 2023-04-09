import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { mockDrawerNavigation } from "../drawer.mock";
import { withContainer, withMemoryRouter } from "~/storybook";
import { DrawerProvider } from "../drawer/drawer.provider";
import { DrawerContentProps, DrawerState } from "../drawer.types";

type DrawerContentArgs = DrawerContentProps & {
  initialState?: DrawerState;
};

export default {
  title: "Components/Drawers/DrawerContent",
  component: DrawerContent,
  decorators: [withMemoryRouter()],
  render: ({ initialState = "open", ...args }) => (
    <DrawerProvider initialState={initialState}>
      <DrawerContent {...args} />
    </DrawerProvider>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<DrawerContentArgs>;
type Story = StoryObj<DrawerContentArgs>;

export const Default: Story = {
  args: {
    selectedItem: "item2.3.2",
    nav: mockDrawerNavigation,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Collapsed: Story = {
  args: {
    ...Default.args,
    initialState: "collapse",
  },
};
