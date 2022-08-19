import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { HeaderLayout } from "./header-layout";
import { withRouter } from "storybook-addon-react-router-v6";
import { SkeletonGrid } from "../../tests";
import { withFullHeight } from "../../storybook";
import { Content, Header, HeaderProps, HeaderTab, TabPanel } from "../../components";
import { Box, Typography } from "@mui/material";

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

const actions = [
  {
    id: "new",
    text: "Add",
  },
];

const tabs: HeaderTab[] = [
  {
    id: "tab1",
    label: "Tab 1",
  },
  {
    id: "tab2",
    label: "Tab 2",
    disabled: true,
  },
  {
    id: "tab3",
    label: "Tab 3",
  },
];

export default {
  title: "Layouts/HeaderLayout",
  component: HeaderLayout,
  decorators: [withRouter, withFullHeight],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderLayout>;

interface HeaderLayoutStoryProps {
  headerProps: HeaderProps;
  contentChildren: ReactElement;
}

const Template = createTemplate(
  ({ headerProps, contentChildren, ...rest }: HeaderLayoutStoryProps) => {
    return (
      <HeaderLayout {...rest}>
        <Header {...headerProps} />
        <Content>{contentChildren}</Content>
      </HeaderLayout>
    );
  },
);

export const Skeleton = Template.bind({});
Skeleton.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <SkeletonGrid />,
};

export const Tabs = Template.bind({});
Tabs.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
    tabs,
  },
  contentChildren: (
    <Box>
      <TabPanel index={0}>
        <Typography>Panel 1</Typography>
      </TabPanel>
      <TabPanel index={[1, 2]}>
        <Typography>Panel 2</Typography>
      </TabPanel>
      <TabPanel index={3}>
        <Typography>Panel 3</Typography>
      </TabPanel>
    </Box>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <SkeletonGrid />,
};
