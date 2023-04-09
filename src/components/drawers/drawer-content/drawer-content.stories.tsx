import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { mockDrawerNavigation } from "../drawer.mock";
import { Box } from "@mui/material";
import { withMemoryRouter } from "~/storybook";
import { DrawerProvider } from "../drawer-provider/drawer.provider";

export default {
  title: "Components/Drawers/DrawerContent",
  component: DrawerContent,
  decorators: [
    withMemoryRouter(),
    (Story) => {
      return <Box maxWidth={300}>{<Story />}</Box>;
    },
  ],
  render: (args) => (
    <DrawerProvider>
      <DrawerContent {...args} />
    </DrawerProvider>
  ),
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DrawerContent>;
type Story = StoryObj<typeof DrawerContent>;

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

export const SubmenuPopover: Story = {
  args: {
    ...Default.args,
    //TODO submenuVariant: "popover",
  },
};
