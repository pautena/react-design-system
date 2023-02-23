import { ComponentMeta } from "@storybook/react";
import { GroupValueCard, GroupValueItem } from "./group-value-card";
import { createTemplate, withPadding } from "../../../storybook";
import { GroupValueCardDummy } from "./group-value-card.mock";
import { ValueImage } from "../value-image";
import workInProgressImg from "../../../stories/assets/work-in-progress.jpg";
import React from "react";
import { ValueContent } from "../value-content";
import { DatatablePlaceholder } from "~/tests/datatable-placeholder";

export default {
  title: "Components/Value displays/GroupValueCard",
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
    <GroupValueItem xs={12} bordered={false}>
      <ValueImage label="Lorem ipsum" value={workInProgressImg} />
    </GroupValueItem>
  </GroupValueCard>
);

export const WithDataTable = () => (
  <GroupValueCard title="Hello world" subtitle="Lorem ipsum sit amet">
    <GroupValueItem xs={12} bordered={false}>
      <ValueContent label="lorem ipsum">
        <DatatablePlaceholder />
      </ValueContent>
    </GroupValueItem>
  </GroupValueCard>
);
