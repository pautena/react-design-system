import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Header } from "./header";
import { withMemoryRouter } from "~/storybook";
import { breadcrumbs, tabs, actions } from "./header.dummy";

export default {
  title: "Sections/Header",
  component: Header,
  decorators: [withMemoryRouter()],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template = createTemplate(Header);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "inherit",
  breadcrumbs,
  actions,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Lorem ipsum",
};

export const ColorInherit = Template.bind({});
ColorInherit.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "inherit",
  breadcrumbs,
  tabs,
  actions,
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "primary",
  breadcrumbs,
  tabs,
  actions,
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "secondary",
  breadcrumbs,
  tabs,
  actions,
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "default",
  breadcrumbs,
  tabs,
  actions,
};

export const ColorTransparent = Template.bind({});
ColorTransparent.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "transparent",
  breadcrumbs,
  tabs,
  actions,
};

export const WithSubheader = Template.bind({});
WithSubheader.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
};

export const WithBreadcumbs = Template.bind({});
WithBreadcumbs.args = {
  title: "Lorem ipsum",
  breadcrumbs,
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "default",
  breadcrumbs,
  actions,
};

export const WithTabs = Template.bind({});
WithTabs.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  preset: "default",
  breadcrumbs,
  tabs,
};
