import { Meta, StoryObj } from "@storybook/react";
import { withContainer, withLocalizationProvider } from "~/storybook";
import { DateRangeCalendar } from "./date-range-calendar";

export default {
  title: "Components/Inputs/DateRangeCalendar",
  component: DateRangeCalendar,
  decorators: [withLocalizationProvider],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateRangeCalendar>;
type Story = StoryObj<typeof DateRangeCalendar>;

export const Default: Story = {
  args: {
    defaultValue: [new Date(2023, 4, 2), new Date(2023, 4, 24)],
  },
};
