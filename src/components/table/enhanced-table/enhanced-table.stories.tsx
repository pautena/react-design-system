import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { TestTable, columns, data } from "./enhanced-table.dummy";

export default {
  title: "Components/Table",
  component: TestTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TestTable>;

const Template = createTemplate(TestTable);

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
  defaultSort: "startDate",
  defaultOrder: "asc",
};
