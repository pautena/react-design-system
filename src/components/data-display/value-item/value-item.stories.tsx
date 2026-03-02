import type { Meta, StoryObj } from "@storybook/react";
import { ValueText } from "@/components/data-display/value-text/value-text";
import { ValueItem } from "./value-item";

export default {
  title: "Data Display/ValueItem",
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

export const BreakpointsBorder: Story = {
  args: {
    bordered: {
      xs: false,
      sm: true,
      md: false,
      lg: true,
    },
  },
};

export const BreakpointsArrayBorder: Story = {
  args: {
    bordered: [false, true, false, true],
  },
};
