import type { Meta, StoryObj } from "@storybook/react";
import SkeletonCard from "./SkeletonCard";

export default {
  title: "Placeholders/SkeletonCard",
  component: SkeletonCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SkeletonCard>;
type Story = StoryObj<typeof SkeletonCard>;

export const Default: Story = {
  args: {
    width: 250,
  },
};
