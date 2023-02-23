import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { DrawerSection } from "./drawer-section";
import { withContainer } from "../../../storybook";
import { withMemoryRouter } from "~/storybook";
import { SectionItems } from "./drawer-section.mock";

export default {
  title: "Components/Drawers/DrawerSection",
  component: DrawerSection,
  decorators: [withMemoryRouter(), withContainer({ width: 250 })],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof DrawerSection>;

const Template = createTemplate(DrawerSection);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  items: SectionItems,
};

export const WihtoutTitle = Template.bind({});
WihtoutTitle.args = {
  items: SectionItems,
};
