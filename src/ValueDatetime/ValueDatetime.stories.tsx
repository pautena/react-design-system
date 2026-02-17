import type { Meta, StoryObj } from "@storybook/react";
import { withContainer, withLocalizationProvider } from "../storybook";
import ValueDatetime from "./ValueDatetime";

export default {
  title: "Data Display/ValueDatetime",
  component: ValueDatetime,
  decorators: [withContainer({ width: 600 }), withLocalizationProvider],
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ValueDatetime>;
type Story = StoryObj<typeof ValueDatetime>;

export const Default: Story = {
  args: {
    label: "Lorem",
    value: new Date(2022, 8, 22),
    format: "yyyy/MM/dd",
  },
};

export const Dense: Story = {
  args: {
    label: "Lorem",
    value: new Date(2022, 8, 22),
    format: "yyyy/MM/dd",
    dense: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: "Lorem",
    format: "yyyy/MM/dd",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: "Lorem",
    format: "yyyy/MM/dd",
    placeholder: ".",
  },
};
