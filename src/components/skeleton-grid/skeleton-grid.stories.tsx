import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "./skeleton-grid";

export default {
  title: "Placeholders/SkeletonGrid",
  component: SkeletonGrid,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkeletonGrid>;

type Story = StoryObj<typeof SkeletonGrid>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    size: 6,
  },
};
