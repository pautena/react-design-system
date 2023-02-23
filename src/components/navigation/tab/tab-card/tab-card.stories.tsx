import React from "react";
import { ComponentMeta } from "@storybook/react";
import { TabCard } from "./tab-card";
import { createTemplate } from "../../../../storybook";
import { DummyTabs, TabCardDummy, TabCardDummyProps } from "./tab-card.dummy";

export default {
  title: "Components/Navigation/Tab card",
  component: TabCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TabCard>;

const Template = createTemplate((props: TabCardDummyProps) => {
  return <TabCardDummy {...props} />;
});

export const Default = Template.bind({});
Default.args = {
  tabs: DummyTabs,
};
