import { Meta, StoryObj } from "@storybook/react";
import { LoremIpsumPlaceholder } from "./LoremIpsumPlaceholder";

export default {
  title: "Components/Placeholders/LoremIpsumPlaceholder",
  component: LoremIpsumPlaceholder,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoremIpsumPlaceholder>;
type Story = StoryObj<typeof LoremIpsumPlaceholder>;

export const Default: Story = {};
