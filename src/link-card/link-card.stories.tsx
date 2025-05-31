import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../storybook";
import { LinkCard } from "./link-card";

export default {
  title: "Components/Data Display/LinkCard",
  component: LinkCard,
  decorators: [withContainer({ width: 400 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LinkCard>;
type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkText: "Learn more",
    variant: "primary",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const Info: Story = {
  args: {
    ...Default.args,
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: "error",
  },
};

export const WithoutLinkButton: Story = {
  args: {
    title: "Lorem ipsum",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};
