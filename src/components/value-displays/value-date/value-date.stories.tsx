import { ComponentMeta } from "@storybook/react";
import { ValueDate } from "./value-date";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Value displays/ValueDate",
  component: ValueDate,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueDate>;

const Template = createTemplate(ValueDate);

export const Default = Template.bind({});
Default.args = {
  label: "Lorem",
  value: new Date(2022, 8, 22),
  format: "yyyy/MM/dd",
};
