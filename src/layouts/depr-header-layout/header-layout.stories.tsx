import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DeprecatedHeaderLayout } from "./header-layout";
import { withRouter } from "storybook-addon-react-router-v6";
import { SkeletonGrid } from "../../tests";
import { withFullHeight } from "../../storybook";

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

export default {
  title: "Layouts/DeprecatedHeaderLayout",
  component: DeprecatedHeaderLayout,
  decorators: [withRouter, withFullHeight],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DeprecatedHeaderLayout>;

const Template = createTemplate((args) => {
  return (
    <DeprecatedHeaderLayout {...args}>
      <SkeletonGrid />
    </DeprecatedHeaderLayout>
  );
});

export const Default = Template.bind({});
Default.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions: [
      {
        id: "new",
        text: "Add",
      },
    ],
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions: [
      {
        id: "new",
        text: "Add",
      },
    ],
  },
};
