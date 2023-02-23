import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../../storybook";
import { TestTable, columns, data } from "./enhanced-table.mock";

export default {
  title: "Components/Tables/EnhancedTable",
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
