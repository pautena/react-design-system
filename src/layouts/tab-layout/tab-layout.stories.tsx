import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { TabLayout } from "./tab-layout";
import { withRouter } from "storybook-addon-react-router-v6";
import { Typography } from "@mui/material";
import { HeaderTab, TabPanel } from "../../components";

const breadcrumbs = [
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

const tabs: HeaderTab[] = [
  {
    id: "tab1",
    label: "Tab 1",
  },
  {
    id: "tab2.1",
    label: "Tab 2.1",
  },
  {
    id: "tab2.2",
    label: "Tab 2.2",
  },
  {
    id: "tab3",
    label: "Tab 3",
    disabled: true,
  },
  {
    id: "tab4",
    label: "Tab 4",
  },
];

export default {
  title: "Layouts/TabLayout",
  component: TabLayout,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TabLayout>;

const Template = createTemplate((args) => {
  return (
    <TabLayout {...args}>
      <TabPanel index={0}>
        <Typography>Panel 1</Typography>
      </TabPanel>
      <TabPanel index={[1, 2]}>
        <Typography>Panel 2</Typography>
      </TabPanel>
      <TabPanel index={3}>
        <Typography>Panel 3</Typography>
      </TabPanel>
      <TabPanel index={4}>
        <Typography>Panel 4</Typography>
      </TabPanel>
    </TabLayout>
  );
});

export const Default = Template.bind({});
Default.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    tabs,
    actions: [
      {
        id: "new",
        text: "Add",
      },
    ],
  },
};
