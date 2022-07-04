import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Header,HeaderAction,HeaderTab,HeaderBreadcrumb } from "./header";
import {withRouter} from 'storybook-addon-react-router-v6';
import {action} from '@storybook/addon-actions';

const breadcrumbs:HeaderBreadcrumb[] = [
  {
    id: "list",
    text: "Items",
    link: "/items",
  },
  {
    id: "item",
    text: "Item 1",
    link: "/items/1",
  },
];

const actions:HeaderAction[] = [{
  id:'new',
  text:"Add",
  href:"/items/add",
},{
  id:'edit',
  text:"Edit",
  onClick:action("click action edit"),
},{
  id:'delete',
  text:"Delete",
  onClick:action("click action delete")
}];

const tabs:HeaderTab[] = [{
  id:"tab1",
  label:"Tab 1",
},{
  id:"tab2",
  label:"Tab 2",
  disabled:true,
},{
  id:"tab3",
  label:"Tab 3",
}]

export default {
  title: "Components/Header",
  component: Header,
  decorators:[withRouter],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Header>;

const Template = createTemplate(Header);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
};


export const ColorInherit = Template.bind({});
ColorInherit.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"inherit",
  breadcrumbs,
  tabs,
  selectedTab:2,
  actions,
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"primary",
  breadcrumbs,
  tabs,
  selectedTab:2,
  actions,
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"secondary",
  breadcrumbs,
  tabs,
  selectedTab:2,
  actions,
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"default",
  breadcrumbs,
  tabs,
  selectedTab:2,
  actions,
};

export const ColorTransparent = Template.bind({});
ColorTransparent.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"transparent",
  breadcrumbs,
  tabs,
  selectedTab:2,
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
  color:"default",
  breadcrumbs,
  actions
};

export const WithTabs = Template.bind({});
WithTabs.args = {
  title: "Lorem ipsum",
  subtitle: "Dolor sit amet",
  color:"default",
  breadcrumbs,
  tabs,
  selectedTab:2,
};

