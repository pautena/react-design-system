import type { Meta, StoryObj } from "@storybook/react";
import workInProgressImg from "../stories/assets/work-in-progress.jpg";
import { withContainer } from "../storybook";
import { ValueImage } from "./value-image";

export default {
  title: "Components/Data Display/ValueImage",
  component: ValueImage,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ValueImage>;
type Story = StoryObj<typeof ValueImage>;

export const Default: Story = {
  args: {
    label: "Lorem",
    value: workInProgressImg,
  },
};

export const Dense: Story = {
  args: {
    label: "Lorem",
    value: workInProgressImg,
    dense: true,
  },
};

export const CustomSize: Story = {
  args: {
    label: "Lorem",
    value: workInProgressImg,
    size: 250,
  },
};
