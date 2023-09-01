import { Meta, StoryObj } from "@storybook/react";
import { DatatablePlaceholder } from "./DatatablePlaceholder";

export default {
  title: "Components/Placeholders/DatatablePlaceholder",
  component: DatatablePlaceholder,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DatatablePlaceholder>;
type Story = StoryObj<typeof DatatablePlaceholder>;

export const Default: Story = {};
