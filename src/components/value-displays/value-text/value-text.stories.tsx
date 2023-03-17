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