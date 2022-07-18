import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate, withPadding } from "../../storybook";
import { QueryContainer, QueryContainerProps } from "./query-container";
import { Typography, Box } from "@mui/material";

export default {
  title: "Components/QueryContainer",
  component: QueryContainer,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof QueryContainer>;

const Template = createTemplate((args: QueryContainerProps) => {
  return (
    <Box height={300}>
      <QueryContainer {...args}>
        <Typography>Children content</Typography>
      </QueryContainer>
    </Box>
  );
});

export const Fetching = Template.bind({});
Fetching.args = {
  isFetching: true,
};

export const Error = Template.bind({});
Error.args = {
  isFetching: false,
  error: {
    name: "Sign in error",
    message: "User and password doesn't match",
  },
};

export const ErrorWithOnlyMessage = Template.bind({});
ErrorWithOnlyMessage.args = {
  isFetching: false,
  error: {
    message: "Internal error",
  },
};

export const Success = Template.bind({});
Success.args = {
  isFetching: false,
  success: {
    name: "Item added",
    message: "The new item has been created with id 1",
  },
};

export const SuccessWithOnlyMessage = Template.bind({});
SuccessWithOnlyMessage.args = {
  isFetching: false,
  success: {
    message: "The new item has been created with id 1",
  },
};

export const Content = Template.bind({});
Content.args = {
  isFetching: false,
};
