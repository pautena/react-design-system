import React from "react";
import { ComponentMeta } from "@storybook/react";
import { TabCard } from "./tab-card";
import { createTemplate } from "../../../storybook";
import { DummyTabs, TabCardDummy } from "./tab-card.dummy";

export default {
  title: "Components/Tab card",
  component: TabCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TabCard>;

const Template = createTemplate((props) => {
  return <TabCardDummy {...props} />;
});

export const Default = Template.bind({});
Default.args = {
  tabs: DummyTabs,
};
