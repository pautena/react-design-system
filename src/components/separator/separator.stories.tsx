import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../storybook";
import Separator from "./separator";

export default {
  title: "Layout/Separator",
  component: Separator,
  decorators: [withContainer({ width: 360, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};
