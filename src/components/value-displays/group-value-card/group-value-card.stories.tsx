import { ComponentMeta } from "@storybook/react";
import { GroupValueCard } from "./group-value-card";
import { createTemplate, withPadding } from "../../../storybook";
import { GroupValueCardDummy } from "./group-value-card.mock";

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
