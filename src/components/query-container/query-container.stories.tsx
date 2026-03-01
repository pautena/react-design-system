import type { Meta, StoryObj } from "@storybook/react";
import { withPadding } from "../../storybook";
import QueryContainer, { type QueryContainerProps } from "./query-container";

export default {
  title: "Feedback/QueryContainer",
  component: QueryContainer,
  decorators: [withPadding()],
  parameters: {
    layout: "fullscreen",
  },
  render: (args: QueryContainerProps) => {
    return (
      <div className="h-[300px]">
        <QueryContainer {...args}>
          <p>Children content</p>
        </QueryContainer>
      </div>
    );
  },
} satisfies Meta<typeof QueryContainer>;

type Story = StoryObj<typeof QueryContainer>;

export const Default: Story = {
  args: {
    loading: true,
  },
};

export const Fetching: Story = {
  args: {
    fetching: true,
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
