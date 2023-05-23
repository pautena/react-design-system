import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DummyTabs, TabCardDummy, TabCardDummyProps } from "./tab-card.dummy";

export default {
  title: "Components/Navigation/TabCard",
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
