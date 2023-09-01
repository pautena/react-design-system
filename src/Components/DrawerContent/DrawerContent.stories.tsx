import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./DrawerContent";
import { mockDrawerNavigation } from "../Drawer.mock";
import { withMemoryRouter } from "~/Storybook";
import { DrawerProvider } from "../DrawerProvider";
import { DrawerContentProps, DrawerState } from "../Drawer.types";

type DrawerContentArgs = DrawerContentProps & {
  initialState?: DrawerState;
  selectedItemId?: string;
};

export default {
  title: "Components/Drawers/DrawerContent",
  component: DrawerContent,
  decorators: [withMemoryRouter()],
  render: ({ initialState = "open", selectedItemId, ...args }) => (
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
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
    selectedItemId: "item2.3.2",
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
