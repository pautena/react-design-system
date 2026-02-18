import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Test/Tailwind",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => (
    <div className="p-8 bg-primary text-primary-foreground rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="text-sm">
        If you see styled text with background color, Tailwind is working!
      </p>
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80"
      >
        Button
      </button>
    </div>
  ),
};
