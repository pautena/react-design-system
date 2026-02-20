import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";

const meta = {
  title: "shadcn/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const SizeExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Extra small",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const SizeIcon: Story = {
  args: {
    size: "icon",
    children: "🔥",
  },
};
