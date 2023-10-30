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
import { TestRouterId } from "../tests/components";

export default {
  title: "Components/Containers/ListPanel",
  component: ListPanel,
  decorators: [withContainer({ width: 800, height: 600 }), withMemoryRouter(["/inbox"])],
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
          <Route path="/panel/:id" element={<TestRouterId />} />
          <Route path="/inbox" element={<Typography>inbox panel</Typography>} />
          <Route path="/:id/profile" element={<Typography>profile panel</Typography>} />
          <Route path="/:id/settings" element={<Typography>settings panel</Typography>} />
          <Route path="/" element={<Typography>Select an item in the left panel</Typography>} />
        </Routes>
      </ListPanel>
    </>
  );
};
