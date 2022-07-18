import React from "react";
import { Box } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import { createTemplate, withContainer } from "../../storybook";
import { LoadingArea } from "./loading-area";

export default {
  title: "Components/LoadingArea",
  component: LoadingArea,
  decorators: [withContainer({ height: 300 })],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoadingArea>;

const Template = createTemplate(LoadingArea);

export const Default = Template.bind({});
Default.args = {};
