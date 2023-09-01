import { Meta, StoryObj } from "@storybook/react";
import { withContainer, withLocalizationProvider } from "~/Storybook";
import { DateRangePicker } from "./DateRangePicker";

export default {
  title: "Components/Inputs/DateRangePicker",
  component: DateRangePicker,
  decorators: [withLocalizationProvider, withContainer({ width: 300 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateRangePicker>;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    label: "Select your date range",
    defaultValue: [new Date(2023, 4, 9), new Date(2023, 4, 18)],
    format: "yyyy/MM/dd",
    fullWidth: true,
  },
};

export const Small: Story = {
  args: {
    label: "Select your date range",
    defaultValue: [new Date(2023, 4, 9), new Date(2023, 4, 18)],
    format: "yyyy/MM/dd",
    fullWidth: true,
    size: "small",
  },
};
