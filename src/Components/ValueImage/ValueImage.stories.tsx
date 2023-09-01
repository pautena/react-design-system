import { Meta, StoryObj } from "@storybook/react";
import { ValueImage } from "./ValueImage";
import { withContainer } from "../../Storybook";
import workInProgressImg from "../../../Stories/Assets/WorkInProgress.jpg";

export default {
  title: "Components/Value displays/ValueImage",
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
