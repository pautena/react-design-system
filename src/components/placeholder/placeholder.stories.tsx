import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "lucide-react";
import Placeholder, { type PlaceholderIconArgs } from "./placeholder";
import { actions } from "./placeholder.mock";

export default {
  title: "Placeholders/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Placeholder>;

type Story = StoryObj<typeof Placeholder>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",
  },
};

export const WithIcon: Story = {
  args: {
    icon: ({ size }: PlaceholderIconArgs) => <Search size={size} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",
  },
};

export const WithActions: Story = {
  args: {
    icon: ({ size }: PlaceholderIconArgs) => <Search size={size} />,
    title: "Lorem ipsum dolor sit amet",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor",
    actions,
  },
};
