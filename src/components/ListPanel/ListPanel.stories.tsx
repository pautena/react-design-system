import { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "../../Storybook";
import { ListPanel } from "./ListPanel";
import React from "react";
import { Box } from "@mui/material";
import { ListPanelPanel } from "./ListPanelPanel";
import { ListPanelDemoContent, mockItemsLong, mockItemsShort } from "./ListPanel.mocks";

export default {
  title: "Components/Containers/ListPanel",
  component: ListPanel,
  decorators: [withContainer({ width: 800, height: 600 })],
  render: (args) => (
    <ListPanel {...args}>
      <ListPanelDemoContent />
      <ListPanelPanel ids={["drafts"]}>
        <Box>Drafts panel</Box>
      </ListPanelPanel>
    </ListPanel>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ListPanel>;
type Story = StoryObj<typeof ListPanel>;

export const Short: Story = {
  args: {
    items: mockItemsShort,
  },
};

export const Long: Story = {
  args: {
    items: mockItemsLong,
    defaultSelectedItem: "item3",
  },
};
