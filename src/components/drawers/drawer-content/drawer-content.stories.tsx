import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
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
} as ComponentMeta<typeof DrawerContent>;

const Template = createTemplate(DrawerContent);

export const Default = Template.bind({});
Default.args = {
  selectedItem: "item2.3.2",
  nav: mockNav,
};
