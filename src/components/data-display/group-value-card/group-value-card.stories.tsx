import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "@/storybook";
import { ValueBoolean } from "../value-boolean/value-boolean";
import { ValueItem } from "../value-item/value-item";
import { ValueText } from "../value-text/value-text";
import { GroupValueCard } from "./group-value-card";

export default {
  title: "Data Display/GroupValueCard",
  component: GroupValueCard,
  decorators: [withContainer({ width: 900, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GroupValueCard>;

type Story = StoryObj<typeof GroupValueCard>;

export const Default: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    children: [
      <ValueItem key="1" size={{ xs: 12, md: 8 }}>
        <ValueText label="Hello world" value="Lorem ipsum sit amet" />
      </ValueItem>,
      <ValueItem key="2" size={{ xs: 12, md: 4 }}>
        <ValueBoolean label="Enabled" value />
      </ValueItem>,
    ],
  },
};

export const Dense: Story = {
  args: {
    ...Default.args,
    dense: true,
  },
};
