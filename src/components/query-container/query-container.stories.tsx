import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withPadding } from "../../../storybook";
import { QueryContainer, QueryContainerProps } from "./query-container";
import { Typography, Box } from "@mui/material";

export default {
  title: "Components/Feedback/QueryContainer",
  component: QueryContainer,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
  render: (args: QueryContainerProps) => {
    return (
      <Box height={300}>
        <QueryContainer {...args}>
          <Typography>Children content</Typography>
        </QueryContainer>
      </Box>
    );
  },
} satisfies Meta<typeof QueryContainer>;
type Story = StoryObj<typeof QueryContainer>;

export const Fetching: Story = {
  args: {
    fetching: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const FetchingAndLoading: Story = {
  args: {
    loading: true,
    fetching: true,
  },
};

export const Error: Story = {
  args: {
    fetching: false,
    error: {
      name: "Sign in error",
      message: "User and password doesn't match",
    },
  },
};

export const ErrorWithOnlyMessage: Story = {
  args: {
    fetching: false,
    error: {
      message: "Internal error",
    },
  },
};

export const Success: Story = {
  args: {
    fetching: false,
    success: {
      name: "Item added",
      message: "The new item has been created with id 1",
    },
  },
};

export const SuccessWithOnlyMessage: Story = {
  args: {
    fetching: false,
    success: {
      message: "The new item has been created with id 1",
    },
  },
};

export const Content: Story = {
  args: {
    fetching: false,
  },
};
