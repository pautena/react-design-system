import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "../SkeletonGrid";
import Content from "./Content";

export default {
  title: "Components/Containers/Content",
  component: Content,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Content>
      <SkeletonGrid />
    </Content>
  ),
} satisfies Meta<typeof Content>;
type Story = StoryObj<typeof Content>;

export const Default: Story = {};
