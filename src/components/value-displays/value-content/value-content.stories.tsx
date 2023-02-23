import { ComponentMeta } from "@storybook/react";
import { ValueContent } from "./value-content";
import { withContainer } from "../../../storybook";
import { Typography } from "@mui/material";
import React from "react";

export default {
  title: "Components/Value displays/ValueContent",
  component: ValueContent,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueContent>;

export const Default = () => (
  <ValueContent label="lorem ipsum">
    <Typography>Demo content</Typography>
  </ValueContent>
);
