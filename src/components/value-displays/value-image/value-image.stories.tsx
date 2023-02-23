import { ComponentMeta } from "@storybook/react";
import { ValueImage } from "./value-image";
import { createTemplate, withContainer } from "../../../storybook";
import workInProgressImg from "../../../stories/assets/work-in-progress.jpg";

export default {
  title: "Components/Value displays/ValueImage",
  component: ValueImage,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueImage>;

const Template = createTemplate(ValueImage);

export const Default = Template.bind({});
Default.args = {
  label: "Lorem",
  value: workInProgressImg,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  label: "Lorem",
  value: workInProgressImg,
  size: 250,
};
