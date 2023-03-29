import { ComponentMeta } from "@storybook/react";
import { ValueRating } from "./value-rating";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Components/Value displays/ValueRating",
  component: ValueRating,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueRating>;

const Template = createTemplate(ValueRating);

export const Default = Template.bind({});
Default.args = {
  label: "Lorem",
  value: 3,
};

export const Max = Template.bind({});
Max.args = {
  label: "Lorem",
  value: 4,
  maxRating: 7,
};
