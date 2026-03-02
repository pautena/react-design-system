import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { Content } from "./content";

export default {
  title: "Containers/Content",
  component: Content,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Content>;

type Story = StoryObj<typeof Content>;

export const Default: Story = {
  args: {
    children: <SkeletonGrid />,
  },
};
