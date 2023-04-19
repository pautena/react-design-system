import { Meta, StoryObj } from "@storybook/react";
import { ValueItem } from "./value-item";
import { ValueText } from "../value-text";
import React from "react";

export default {
  title: "Components/Value displays/ValueItem",
  component: ValueItem,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <ValueItem {...args}>
      <ValueText label="Hello world" value="Lorem ipsum sit amet" />
    </ValueItem>
  ),
} satisfies Meta<typeof ValueItem>;
type Story = StoryObj<typeof ValueItem>;

export const Default: Story = {
  args: {},
};

export const Borderless: Story = {
  args: {
    bordered: false,
  },
};
