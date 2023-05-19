import { Meta, StoryObj } from "@storybook/react";
import { withContainer, withLocalizationProvider } from "~/storybook";
import { DateRangePicker } from "./date-range-picker";

export default {
  title: "Components/Inputs/DateRangePicker",
  component: DateRangePicker,
  decorators: [withLocalizationProvider, withContainer({ width: 400, height: 400 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateRangePicker>;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    label: "Select your date range",
    value: [new Date(2023, 4, 9), new Date(2023, 4, 18)],
    format: "yyyy/MM/dd",
    fullWidth: true,
  },
};
