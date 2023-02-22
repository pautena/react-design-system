import { ComponentMeta } from "@storybook/react";
import { GroupValueCard, GroupValueItem } from "./group-value-card";
import { createTemplate, withPadding } from "../../../storybook";
import { GroupValueCardDummy } from "./group-value-card.mock";
import { ValueImage } from "../value-image";
import workInProgressImg from "../../../stories/assets/work-in-progress.jpg";
import React from "react";

export default {
  title: "Value displays/GroupValueCard",
  component: GroupValueCard,
  decorators: [withPadding(2)],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof GroupValueCard>;

const Template = createTemplate(GroupValueCardDummy);

export const Default = Template.bind({});
Default.args = {
  title: "Hello world",
  subtitle: "Lorem ipsum sit amet",
};

export const WihtoutSubtitle = Template.bind({});
WihtoutSubtitle.args = {
  title: "Hello world",
};

export const WithImage = () => (
  <GroupValueCard centered title="Hello world" subtitle="Lorem ipsum sit amet">
    <ValueImage label="Lorem ipsum" value={workInProgressImg} />
  </GroupValueCard>
);
