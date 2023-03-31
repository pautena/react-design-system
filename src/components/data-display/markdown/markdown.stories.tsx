import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Markdown } from "./markdown";
import mockMarkdownContentFile from "~/tests/mocks/markdown.mock.md";
import React from "react";
import { mockMarkdownContent } from "~/tests/mocks/markdown.mock";

export default {
  title: "Components/Data Display/Markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => <Markdown {...args} />;

export const File = Template.bind({});
File.args = {
  content: mockMarkdownContentFile,
};

export const StringVariable = Template.bind({});
StringVariable.args = {
  content: mockMarkdownContent,
};
