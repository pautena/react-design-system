import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../storybook";
import { SkeletonCard } from "./components";

export default {
  title: "Test/SkeletonCard",
  component: SkeletonCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SkeletonCard>;

const Template = createTemplate(SkeletonCard);

export const Default = Template.bind({});
Default.args = {
  width: 250,
};
