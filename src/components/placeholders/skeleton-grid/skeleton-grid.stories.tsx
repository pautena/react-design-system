import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { SkeletonGrid } from "./skeleton-grid";

export default {
  title: "Components/Placeholders/SkeletonGrid",
  component: SkeletonGrid,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SkeletonGrid>;

const Template = createTemplate(SkeletonGrid);

export const Default = Template.bind({});
