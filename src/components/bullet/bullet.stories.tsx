import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Bullet } from "./bullet";

export default {
  title: "Components/Bullet",
  component: Bullet,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Bullet>;

const Template = createTemplate(Bullet);

export const Default = Template.bind({});
Default.args = {
  variant:'default'
};

export const Primary = Template.bind({});
Primary.args = {
  variant:'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant:'secondary'
};

export const Info = Template.bind({});
Info.args = {
  variant:'info'
};

export const Warning = Template.bind({});
Warning.args = {
  variant:'warning'
};

export const Error = Template.bind({});
Error.args = {
  variant:'error'
};