import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import { ValueRating } from "./value-rating";

export default {
  title: "Data Display/ValueRating",
  component: ValueRating,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ValueRating>;
type Story = StoryObj<typeof ValueRating>;

export const Default: Story = {
  args: {
    label: "Lorem",
    value: 3,
  },
};

export const Dense: Story = {
  args: {
    label: "Lorem",
    value: 3,
    dense: true,
  },
};

export const Max: Story = {
  args: {
    label: "Lorem",
    value: 4,
    maxRating: 7,
  },
};
