import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../storybook";
import { ValueLabel } from "./ValueLabel";

export default {
  title: "Components/Data Display/ValueLabel",
  component: ValueLabel,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ValueLabel>;
type Story = StoryObj<typeof ValueLabel>;

export const Default: Story = {
  args: {
    label: "Lorem",
    value: "ipsum sit",
  },
};

export const Variant: Story = {
  args: {
    label: "Lorem",
    value: "ipsum sit",
    variant: "success",
  },
};

export const NumberAsValue: Story = {
  args: {
    label: "Lorem",
    value: 1000,
  },
};

export const TextList: Story = {
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
  },
};

export const NumberList: Story = {
  args: {
    label: "Lorem",
    value: [15, 9876, 0],
  },
};

export const ListSingleVariant: Story = {
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: "error",
  },
};

export const ListMultipleVariants: Story = {
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    variant: ["error", "success"],
  },
};

export const Placeholder: Story = {
  args: {
    label: "Lorem",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: "Lorem",
    placeholder: ".",
  },
};

export const ListSingleColor: Story = {
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: "#9b3242",
  },
};

export const ListMultipleColors: Story = {
  args: {
    label: "Lorem",
    value: ["ipsum sit", "amet", "dolor"],
    color: ["#9b3242", "#36e3cd"],
  },
};
