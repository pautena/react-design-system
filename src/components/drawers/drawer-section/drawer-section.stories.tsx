import { Meta, StoryObj } from "@storybook/react";
import { DrawerSection, DrawerSectionProps } from "./drawer-section";
import { withMemoryRouter } from "~/storybook";
import { mockCollapsableDrawerNavigationSection } from "../drawer.mock";
import { DrawerProvider } from "../drawer";
import React from "react";
import { DrawerState } from "../drawer.types";

type DrawerSectionArgs = DrawerSectionProps & {
  initialState?: DrawerState;
};

export default {
  title: "Components/Drawers/DrawerSection",
  component: DrawerSection,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "centered",
  },
  render: ({ initialState = "open", ...args }) => (
    <DrawerProvider initialState={initialState}>
      <DrawerSection {...args} />{" "}
    </DrawerProvider>
  ),
} satisfies Meta<DrawerSectionArgs>;
type Story = StoryObj<DrawerSectionArgs>;

export const WihtoutTitle = {
  args: {
    items: mockCollapsableDrawerNavigationSection.items,
  },
};

export const Default: Story = {
  args: {
    ...WihtoutTitle.args,
    title: "Lorem ipsum",
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
