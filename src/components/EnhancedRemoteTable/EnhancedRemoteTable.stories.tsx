import { Meta, StoryObj } from "@storybook/react";
import { columns, data } from "../EnhancedTable/EnhancedTable.mock";
import { EnhancedRemoteDummyTable } from "./EnhancedRemoteTable.mock";

export default {
  title: "Components/Tables/EnhancedRemoteTable",
  component: EnhancedRemoteDummyTable,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EnhancedRemoteDummyTable>;
type Story = StoryObj<typeof EnhancedRemoteDummyTable>;

export const Default: Story = {
  args: {
    columns,
    data,
    loading: false,
    defaultSort: "startDate",
    defaultOrder: "asc",
  },
};
