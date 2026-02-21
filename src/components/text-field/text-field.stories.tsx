import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import TextField from "./text-field";

export default {
  title: "Inputs/TextField",
  component: TextField,
  decorators: [withContainer({ width: 260 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Car model",
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Use the official model name",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Fetching: Story = {
  args: {
    ...Default.args,
    fetching: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
