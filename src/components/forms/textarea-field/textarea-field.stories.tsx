import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../../storybook";
import { TextareaField } from "./textarea-field";

export default {
  title: "forms/TextareaField",
  component: TextareaField,
  decorators: [withContainer({ width: 320 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextareaField>;

type Story = StoryObj<typeof TextareaField>;

export const Default: Story = {
  args: {
    label: "Vehicle notes",
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Describe relevant vehicle details",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    helperText: "Describe relevant vehicle details",
    error: "Notes are required",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Placeholder: Story = {
  args: {
    ...Default.args,
    placeholder: "Type additional context...",
  },
};

export const RowCount: Story = {
  args: {
    ...Default.args,
    rowCount: 8,
  },
};
