import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ExpandableAlert } from "./expandable-alert";
import { withContainer } from "~/storybook";

export default {
  title: "Components/Alerts/ExpandableAlert",
  component: ExpandableAlert,
  decorators: [withContainer({ width: 500 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ExpandableAlert>;

const Template: ComponentStory<typeof ExpandableAlert> = (args) => <ExpandableAlert {...args} />;

export const Info = Template.bind({});
Info.args = {
  severity: "info",
  title: "Lorem ipsum",
  message: "Lorem ipsum dolor sit amet",
  metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"],
};

export const Success = Template.bind({});
Success.args = {
  ...Info.args,
  severity: "success",
};

export const Error = Template.bind({});
Error.args = {
  ...Info.args,
  severity: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Info.args,
  severity: "warning",
};

export const WihtoutMetadata = Template.bind({});
WihtoutMetadata.args = {
  severity: "info",
  title: "Lorem ipsum",
  message: "Lorem ipsum dolor sit amet",
};
