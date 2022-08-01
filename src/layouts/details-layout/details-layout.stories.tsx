import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DetailsLayout } from "./details-layout";
import { withRouter } from "storybook-addon-react-router-v6";
import { mockModel, createModelInstance } from "../../generators/generators.mock";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { PlaceholderIconArgs } from "../../components";

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
  notFoundPlaceholderProps: {
    title: "Not found",
    subtitle: "There is no item with that id",
    icon: ({ size, color }: PlaceholderIconArgs) => (
      <SentimentVeryDissatisfiedIcon color={color} sx={{ fontSize: size }} />
    ),
  },
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
  objectDetailsProps: {
    model: mockModel,
    instance: createModelInstance(mockModel),
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  loading: true,
  objectDetailsProps: {
    model: mockModel,
  },
};

export const NotFound = Template.bind({});
NotFound.args = {
  ...args,
  objectDetailsProps: {
    model: mockModel,
  },
};
