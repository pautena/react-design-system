import type { Meta, StoryObj } from "@storybook/react";
import Board from "./board";

export default {
  title: "Data Display/Board",
  component: Board,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Board>;

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  args: {
    content:
      "Of recommend residence education be on difficult repulsive offending.",
  },
};

export const ArrayList: Story = {
  args: {
    content: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"],
  },
};

export const Children: Story = {
  args: {
    content: "row 1\nrow 2\nrow 3",
    children: (
      <>
        <h3 className="text-lg font-semibold">First line</h3>
        <p className="text-sm">Second line</p>
        <p className="text-xs uppercase tracking-wide">Third line</p>
      </>
    ),
  },
};
