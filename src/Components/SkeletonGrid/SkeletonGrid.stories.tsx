import { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "./SkeletonGrid";

export default {
  title: "Components/Placeholders/SkeletonGrid",
  component: SkeletonGrid,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkeletonGrid>;
type Story = StoryObj<typeof SkeletonGrid>;

export const Default: Story = {};
