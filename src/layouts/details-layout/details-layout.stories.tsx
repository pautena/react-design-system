import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DetailsLayout } from "./details-layout";
import { withRouter } from "storybook-addon-react-router-v6";

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

const args = {
  size: 100,
  dataSetType: "Commodity",
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
  objectDetailsProps: {},
};

export default {
  title: "Layouts/DetailsLayout",
  component: DetailsLayout,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DetailsLayout>;

const Template = createTemplate(DetailsLayout);

export const Default = Template.bind({});
Default.args = {
  ...args,
};

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  loading: true,
};
