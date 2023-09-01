import { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "./Markdown";
import mockMarkdownContentFile from "~/Tests/Mocks/Markdown.mock.md";
import { mockMarkdownContent } from "~/Tests/Mocks/Markdown.mock";

export default {
  title: "Components/Data Display/Markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Markdown>;
type Story = StoryObj<typeof Markdown>;

export const File: Story = {
  args: {
    content: mockMarkdownContentFile,
  },
};

export const StringVariable: Story = {
  args: {
    content: mockMarkdownContent,
  },
};
