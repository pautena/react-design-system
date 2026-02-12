import type { Meta, StoryObj } from "@storybook/react";
import ContentPlaceholder from "./ContentPlaceholder";

export default {
  title: "Components/Placeholders/ContentPlaceholder",
  component: ContentPlaceholder,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContentPlaceholder>;
type Story = StoryObj<typeof ContentPlaceholder>;

export const Default: Story = {};
