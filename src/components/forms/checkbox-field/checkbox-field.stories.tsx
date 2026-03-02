import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../../storybook";
import { CheckboxField } from "./checkbox-field";

export default {
  title: "forms/CheckboxField",
  component: CheckboxField,
  decorators: [withContainer({ width: 320 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckboxField>;

type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {
  args: {
    label: "Accept terms",
  },
};

export const HelperText: Story = {
  args: {
    ...Default.args,
    helperText: "Required to continue",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    helperText: "Required to continue",
    error: "You must accept terms",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    defaultChecked: true,
  },
};
