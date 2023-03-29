import { ComponentMeta } from "@storybook/react";
import { ValueDatetime } from "./value-datetime";
import { createTemplate, withContainer, withLocalizationProvider } from "../../../storybook";

export default {
  title: "Components/Value displays/ValueDatetime",
  component: ValueDatetime,
  decorators: [withContainer({ width: 600 }), withLocalizationProvider],
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

export const EditableDatetime = Template.bind({});
EditableDatetime.args = {
  label: "Lorem",
  value: new Date(2022, 8, 22, 12, 25),
  format: "yyyy/MM/dd HH:mm",
  editable: true,
  editInputType: "datetime",
};

export const EditableTime = Template.bind({});
EditableTime.args = {
  label: "Lorem",
  value: new Date(2022, 8, 22, 12, 25),
  format: "HH:mm",
  editable: true,
  editInputType: "time",
};

export const EditableDate = Template.bind({});
EditableDate.args = {
  label: "Lorem",
  value: new Date(2022, 8, 22),
  format: "yyyy/MM/dd",
  editable: true,
  editInputType: "date",
};
