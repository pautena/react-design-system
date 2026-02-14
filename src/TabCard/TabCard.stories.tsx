import type { Meta, StoryObj } from "@storybook/react";
import {
  DummyTabs,
  TabCardDummy,
  type TabCardDummyProps,
} from "./TabCard.dummy";

export default {
  title: "Navigation/TabCard",
  component: TabCardDummy,
  parameters: {
    layout: "centered",
  },
  render: (props: TabCardDummyProps) => {
    return <TabCardDummy {...props} />;
  },
} satisfies Meta<typeof TabCardDummy>;
type Story = StoryObj<typeof TabCardDummy>;

export const Default: Story = {
  args: {
    tabs: DummyTabs,
  },
};
