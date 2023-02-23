import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { LoremIpsumPlaceholder } from "./lorem-ipsum-placeholder";

export default {
  title: "Components/Placeholders/LoremIpsumPlaceholder",
  component: LoremIpsumPlaceholder,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof LoremIpsumPlaceholder>;

const Template = createTemplate(LoremIpsumPlaceholder);

export const Default = Template.bind({});
