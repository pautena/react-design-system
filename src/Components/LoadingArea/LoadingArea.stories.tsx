import { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../Storybook";
import { LoadingArea } from "./LoadingArea";

export default {
  title: "Components/Feedback/LoadingArea",
  component: LoadingArea,
  decorators: [withContainer({ height: 300 })],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoadingArea>;
type Story = StoryObj<typeof LoadingArea>;

export const Default: Story = {};
