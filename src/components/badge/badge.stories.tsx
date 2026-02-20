import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";

export default {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "lorem",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    text: "lorem",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "lorem",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    text: "Destructive",
    variant: "error",
  },
};

export const Outline: Story = {
  args: {
    text: "Outline",
    variant: "info",
  },
};

export const Ghost: Story = {
  args: {
    text: "Ghost",
    variant: "default",
    className: "bg-transparent hover:bg-muted",
  },
};

export const Link: Story = {
  args: {
    text: "Link",
    variant: "default",
    className:
      "bg-transparent p-0 text-primary underline-offset-4 hover:underline",
  },
};

export const Info: Story = {
  args: {
    text: "lorem",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    text: "lorem",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    text: "lorem",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    text: "lorem",
    variant: "success",
  },
};
