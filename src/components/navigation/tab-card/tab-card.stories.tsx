import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/data-display/badge/badge";
import {
  DummyTabs,
  TabCardDummy,
  type TabCardDummyProps,
} from "./tab-card.dummy";

const tabsWithCustomFirstIndicator: TabCardDummyProps["tabs"] = [
  DummyTabs[0],
  {
    ...DummyTabs[1],
    icon: <Badge text="10" variant="warning" className="mr-2" />,
  },
  DummyTabs[2],
  DummyTabs[3],
];

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
    tabs: tabsWithCustomFirstIndicator,
    initialTab: 0,
    onChangeTab: () => null,
  },
};
