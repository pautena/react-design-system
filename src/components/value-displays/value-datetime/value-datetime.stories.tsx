import { ComponentMeta } from "@storybook/react";
import { ValueDatetime } from "./value-datetime";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Components/Value displays/ValueDatetime",
  component: ValueDatetime,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueDatetime>;

const Template = createTemplate(ValueDatetime);

export const Default = Template.bind({});
Default.args = {
  label: "Lorem",
  value: new Date(2022, 8, 22),
  format: "yyyy/MM/dd",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Lorem",
  format: "yyyy/MM/dd",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  label: "Lorem",
  format: "yyyy/MM/dd",
  placeholder: ".",
};
