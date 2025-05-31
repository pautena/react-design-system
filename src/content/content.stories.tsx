import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonGrid } from "../skeleton-grid";
import { Content } from "./content";

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
