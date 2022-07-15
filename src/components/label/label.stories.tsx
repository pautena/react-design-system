import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Label } from "./label";

export default {
  title: "Data Display/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Label>;

const Template = createTemplate(Label);

export const Default = Template.bind({});
Default.args = {
  text: "lorem",
  variant: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "lorem",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "lorem",
  variant: "secondary",
};

export const Info = Template.bind({});
Info.args = {
  text: "lorem",
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "lorem",
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  text: "lorem",
  variant: "error",
};
