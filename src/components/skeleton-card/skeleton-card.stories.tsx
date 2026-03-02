import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import { SkeletonCard } from "./skeleton-card";

export default {
  title: "Placeholders/SkeletonCard",
  component: SkeletonCard,
  decorators: [withContainer({ width: 300, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SkeletonCard>;

type Story = StoryObj<typeof SkeletonCard>;

export const Default: Story = {
  args: {
    width: 250,
  },
};

export const Animated: Story = {
  args: {
    width: 250,
    animation: "pulse",
  },
};
