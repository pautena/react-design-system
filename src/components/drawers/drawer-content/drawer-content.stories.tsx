import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "./drawer-content";
import { mockNav } from "../drawer/drawer.mock";
import { Box } from "@mui/material";
import { withMemoryRouter } from "~/storybook";

export default {
  title: "Components/Drawers/DrawerContent",
  component: DrawerContent,
  decorators: [
    withMemoryRouter(),
    (Story) => {
      return <Box maxWidth={300}>{<Story />}</Box>;
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DrawerContent>;
type Story = StoryObj<typeof DrawerContent>;

export const Default: Story = {
  args: {
    selectedItem: "item2.3.2",
    nav: mockNav,
  },
};
