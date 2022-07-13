import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { TableList } from "./table-list";

const maxColumns = 3;

export default {
  title: "Tables/TableList",
  component: TableList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TableList>;

const Template = createTemplate(({ dataSetType, size, ...rest }) => {
  const { data } = useDemoData({
    dataSet: dataSetType,
    rowLength: size,
    maxColumns,
  });
  const { rows } = data;
  const columns = data.columns.map(({ field, headerName }) => ({
    id: field,
    label: headerName,
    sort: true,
  }));

  return <TableList {...rest} columns={columns} data={rows} />;
});

export const Default = Template.bind({});
Default.args = {
  size: 40,
  dataSetType: "Commodity",
  search: true,
};

export const Loading = Template.bind({});
Loading.args = {
  size: 40,
  dataSetType: "Commodity",
  search: true,
  loading: true,
};

export const WihtoutSearch = Template.bind({});
WihtoutSearch.args = {
  size: 40,
  dataSetType: "Commodity",
  search: false,
};
