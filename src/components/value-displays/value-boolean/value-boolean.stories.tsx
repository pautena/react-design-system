import { ComponentMeta } from "@storybook/react";
import { ValueBoolean } from "./value-boolean";
import { createTemplate } from "../../../storybook";

export default {
  title: "Components/Value displays/ValueBoolean",
  component: ValueBoolean,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueBoolean>;

const Template = createTemplate(ValueBoolean);

export const True = Template.bind({});
True.args = {
  label: "Lorem ipsum",
  value: true,
};

export const False = Template.bind({});
False.args = {
  label: "Lorem ipsum",
  value: false,
};
