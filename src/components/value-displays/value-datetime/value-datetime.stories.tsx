import { ComponentMeta } from "@storybook/react";
import { ValueDatetime } from "./value-datetime";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Value displays/ValueDate",
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
