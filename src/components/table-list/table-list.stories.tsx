import React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { TableList, TableListProps } from "./table-list";
import { action } from "@storybook/addon-actions";
import { BasicModelInstance } from "~/generators";

const maxColumns = 3;

export default {
  title: "Tables/TableList",
  component: TableList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TableList>;

interface TemplateProps<T extends BasicModelInstance> extends TableListProps<T> {
  size: number;
  dataSetType: "Commodity" | "Employee";
}

const Template = createTemplate(
  <T extends BasicModelInstance>({ dataSetType, size, ...rest }: TemplateProps<T>) => {
    const { data } = useDemoData({
      dataSet: dataSetType,
      rowLength: size,
      maxColumns,
    });
    const { rows } = data;
    const columns = data.columns.map(({ field, headerName }) => ({
      id: field,
      label: headerName || "invalid",
      sort: true,
      disablePadding: false,
      numeric: false,
    }));

    return <TableList {...rest} columns={columns} data={rows as any} onClick={action("onClick row")} />;
  },
);

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

export const WithOptions = Template.bind({});
WithOptions.args = {
  size: 40,
  dataSetType: "Commodity",
  search: false,
  options: [
    {
      id: "edit",
      label: "Edit",
      onClick: action("Option edit"),
    },
    {
      id: "remove",
      label: "Remove",
      onClick: action("Option remove"),
    },
  ],
};
