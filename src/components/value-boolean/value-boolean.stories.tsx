import type { Meta, StoryObj } from "@storybook/react";
import ValueBoolean from "./value-boolean";

export default {
  title: "Data Display/ValueBoolean",
  component: ValueBoolean,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ValueBoolean>;
type Story = StoryObj<typeof ValueBoolean>;

export const Default: Story = {
  args: {
    label: "Lorem ipsum",
    value: true,
  },
};

export const True: Story = {
  args: {
    label: "Lorem ipsum",
    value: true,
  },
};

export const False: Story = {
  args: {
    label: "Lorem ipsum",
    value: false,
  },
};

export const Dense: Story = {
  args: {
    label: "Lorem ipsum",
    value: true,
    dense: true,
  },
};
