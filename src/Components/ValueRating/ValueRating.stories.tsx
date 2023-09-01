import { Meta, StoryObj } from "@storybook/react";
import { ValueRating } from "./ValueRating";
import { withContainer } from "../../Storybook";

export default {
  title: "Components/Value displays/ValueRating",
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

export const Editable: Story = {
  args: {
    label: "Lorem",
    value: 4,
    maxRating: 7,
    editable: true,
  },
};

export const DenseEditable: Story = {
  args: {
    label: "Lorem",
    value: 4,
    maxRating: 7,
    dense: true,
    editable: true,
  },
};
