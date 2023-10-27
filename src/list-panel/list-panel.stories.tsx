import { Meta, StoryObj } from "@storybook/react";
import { withContainer, withMemoryRouter } from "../storybook";
import { ListPanel } from "./list-panel";
import Box from "@mui/material/Box";
import { ListPanelPanel } from "./list-panel-panel";
import {
  ListPanelDemoContent,
  mockItemsLong,
  mockItemsRouterNavigation,
  mockItemsShort,
} from "./list-panel.mocks";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default {
  title: "Components/Containers/ListPanel",
  component: ListPanel,
  decorators: [withContainer({ width: 800, height: 600 }), withMemoryRouter()],
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

export const RouterNavigation = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Typography>pathname: {pathname}</Typography>
      <ListPanel items={mockItemsRouterNavigation}>
        <Routes>
          <Route path="/all" element={<Box>all panel</Box>} />
          <Route path="/inbox" element={<Box>inbox panel</Box>} />
          <Route path="/sent" element={<Box>sent panel</Box>} />
          <Route path="/drafts" element={<Box>drafts panel</Box>} />
          <Route path="/" element={<Box>Select an item in the left panel</Box>} />
        </Routes>
      </ListPanel>
    </>
  );
};
