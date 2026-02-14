import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "../SkeletonGrid";
import Content from "./Content";

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
