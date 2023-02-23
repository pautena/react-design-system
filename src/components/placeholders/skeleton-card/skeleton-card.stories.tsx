import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { SkeletonCard } from "./skeleton-card";

export default {
  title: "Components/Placeholders/SkeletonCard",
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
