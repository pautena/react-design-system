import { Meta, StoryObj } from "@storybook/react";
import { GroupValueCard } from "./GroupValueCard";
import { withPadding, withLocalizationProvider } from "../../Storybook";
import { GroupValueCardDummy } from "./GroupValueCard.mock";
import { ValueImage } from "../ValueImage";
import workInProgressImg from "../../../Stories/Assets/WorkInProgress.jpg";
import React from "react";
import { ValueContent } from "../ValueContent";
import { DatatablePlaceholder } from "~/Tests/DatatablePlaceholder";
import { ValueItem } from "../ValueItem";

export default {
  title: "Components/Value displays/GroupValueCard",
  component: GroupValueCardDummy,
  decorators: [withPadding(2), withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GroupValueCardDummy>;
type Story = StoryObj<typeof GroupValueCardDummy>;

export const Default: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
  },
};

export const Dense: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    dense: true,
  },
};

export const EditableDense: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    dense: true,
    editable: true,
  },
};

export const Editable: Story = {
  args: {
    title: "Hello world",
    subtitle: "Lorem ipsum sit amet",
    editable: true,
  },
};

export const WihtoutSubtitle: Story = {
  args: {
    title: "Hello world",
  },
};

export const WithImage = () => (
  <GroupValueCard centered title="Hello world" subtitle="Lorem ipsum sit amet">
    <ValueItem xs={12} bordered={false}>
      <ValueImage label="Lorem ipsum" value={workInProgressImg} />
    </ValueItem>
  </GroupValueCard>
);

export const WithDataTable = () => (
  <GroupValueCard title="Hello world" subtitle="Lorem ipsum sit amet">
    <ValueItem xs={12} bordered={false}>
      <ValueContent label="lorem ipsum">
        <DatatablePlaceholder />
      </ValueContent>
    </ValueItem>
  </GroupValueCard>
);
