import { ComponentMeta } from "@storybook/react";
import { ValueText } from "./value-text";
import { createTemplate, withContainer } from "../../../storybook";

export default {
  title: "Components/Value displays/ValueText",
  component: ValueText,
  decorators: [withContainer({ width: 200 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ValueText>;

const Template = createTemplate(ValueText);

export const Default = Template.bind({});
Default.args = {
  label: "Lorem",
  value: "ipsum sit",
};

export const NumberAsValue = Template.bind({});
NumberAsValue.args = {
  label: "Lorem",
  value: 1000,
};

export const TruncatedText = Template.bind({});
TruncatedText.args = {
  label: "Lorem",
  value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Lorem",
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  label: "Lorem",
  placeholder: ".",
};

export const Editable = Template.bind({});
Editable.args = {
  label: "Lorem",
  value: "lorem ipsum",
  editable: true,
};
