import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DrawerSection } from "./drawer-section";
import { withContainer } from "../../storybook";
import { withRouter } from "storybook-addon-react-router-v6";
import { SectionItems } from "./drawer-section.mock";

export default {
  title: "Drawers/DrawerSection",
  component: DrawerSection,
  decorators: [withRouter, withContainer({ width: 250 })],
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
