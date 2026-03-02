import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import { DateRangePicker } from "./date-range-picker";

export default {
  title: "Inputs/DateRangePicker",
  component: DateRangePicker,
  decorators: [withContainer({ width: 300 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateRangePicker>;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    label: "Select range",
    format: "yyyy-MM-dd",
    defaultValue: [new Date(2023, 4, 2), new Date(2023, 4, 24)],
    onValueChange: () => {},
  },
};
