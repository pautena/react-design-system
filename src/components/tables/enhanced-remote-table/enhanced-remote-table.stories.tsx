import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { EnhancedRemoteTable } from "./enhanced-remote-table";
import { columns, data } from "../enhanced-table/enhanced-table.mock";
import { EnhancedRemoteDummyTable } from "./enhanced-remote-table.mock";

export default {
  title: "Components/Tables/EnhancedRemoteTable",
  component: EnhancedRemoteTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EnhancedRemoteTable>;

const Template = createTemplate(EnhancedRemoteDummyTable);

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
  loading: false,
  defaultSort: "startDate",
  defaultOrder: "asc",
};
