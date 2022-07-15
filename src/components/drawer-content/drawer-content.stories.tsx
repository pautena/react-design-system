import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DrawerContent } from "./drawer-content";
import { mockNav } from "../drawer/drawer.mock";
import { Box } from "@mui/material";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Drawers/DrawerContent",
  component: DrawerContent,
  decorators: [
    withRouter,
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
  nav: mockNav,
  open: true,
};
