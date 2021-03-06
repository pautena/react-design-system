import React from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DataTableLayout } from "./data-table-layout";
import { useDemoData } from "@mui/x-data-grid-generator";
import { withRouter } from "storybook-addon-react-router-v6";
import { PlaceholderIconArgs } from "../../components";
import BackupTableIcon from "@mui/icons-material/BackupTable";

const maxColumns = 7;
const editable = true;
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
  dataGridProps: {
    height: 500,
  },
  emptyPlaceholderProps: {
    title: "No item has found",
    subtitle: "First you have to create an item",
    icon: ({ size, color }: PlaceholderIconArgs) => (
      <BackupTableIcon color={color} sx={{ fontSize: size }} />
    ),
    actions: [
      {
        id: "add",
        text: "Add",
        href: "/item/add",
      },
    ],
  },
};

export default {
  title: "Layouts/DataTableLayout",
  component: DataTableLayout,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DataTableLayout>;

const Template = createTemplate(({ loading, dataSetType, size, dataGridProps, ...rest }) => {
  const { data } = useDemoData({
    dataSet: dataSetType,
    rowLength: size,
    maxColumns,
    editable,
  });
  return (
    <DataTableLayout loading={loading} dataGridProps={{ ...data, ...dataGridProps }} {...rest} />
  );
});

export const Default = Template.bind({});
Default.args = {
  ...args,
};

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...args,
  size: 0,
};
