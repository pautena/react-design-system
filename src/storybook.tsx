/* eslint-disable react/display-name */
import React, { FunctionComponent } from "react";
import { ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";
import { Box } from "@mui/material";

export function createTemplate<P>(
  C: JSXElementConstructor<P>,
): ComponentStory<JSXElementConstructor<P>> {
  return (args) => <C {...args} />;
}

export const withFullHeight = (Story: FunctionComponent) => {
  return (
    <Box height="100vh">
      <Story />
    </Box>
  );
};

export const withContainer =
  ({ width, height }: { width?: number; height?: number }) =>
  (Story: FunctionComponent) => {
    return (
      <Box width={width} height={height}>
        <Story />
      </Box>
    );
  };

export const withPadding =
  (padding = 2) =>
  (Story: FunctionComponent) => {
    return (
      <Box padding={padding}>
        <Story />
      </Box>
    );
  };
