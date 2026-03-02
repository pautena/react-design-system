import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "Click me",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Click me",
    variant: "secondary",
  },
};

export const Info: Story = {
  args: {
    children: "Click me",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    children: "Click me",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Click me",
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    children: "Click me",
    variant: "success",
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    children: "Click me",
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    children: "Click me",
    variant: "link",
  },
};

export const SizeExtraSmall: Story = {
  args: {
    children: "Extra small",
    size: "xs",
  },
};

export const SizeSmall: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const SizeIcon: Story = {
  args: {
    children: "🔥",
    size: "icon",
  },
};
