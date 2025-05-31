import type { Meta, StoryObj } from "@storybook/react";
import workInProgressImg from "../stories/assets/work-in-progress.jpg";
import { withLocalizationProvider, withPadding } from "../storybook";
import { DatatablePlaceholder } from "../tests/datatable-placeholder";
import { ValueContent } from "../value-content";
import { ValueImage } from "../value-image";
import { ValueItem } from "../value-item";
import { GroupValueCard } from "./group-value-card";
import { GroupValueCardDummy } from "./group-value-card.mock";

export default {
  title: "Components/Data display/GroupValueCard",
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
    <ValueItem size={{ xs: 12 }} bordered={false}>
      <ValueImage label="Lorem ipsum" value={workInProgressImg} />
    </ValueItem>
  </GroupValueCard>
);

export const WithDataTable = () => (
  <GroupValueCard title="Hello world" subtitle="Lorem ipsum sit amet">
    <ValueItem size={{ xs: 12 }} bordered={false}>
      <ValueContent label="lorem ipsum">
        <DatatablePlaceholder />
      </ValueContent>
    </ValueItem>
  </GroupValueCard>
);
