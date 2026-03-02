import type { Meta, StoryObj } from "@storybook/react";
import { TabProvider } from "../tab-provider";
import { TabPanel } from "./tab-panel";

const TabPanelDemo = ({ initialValue = 0 }: { initialValue?: number }) => {
  return (
    <TabProvider initialValue={initialValue}>
      <TabPanel index={0}>Panel content 1</TabPanel>
      <TabPanel index={1}>Panel content 2</TabPanel>
    </TabProvider>
  );
};

export default {
  title: "Navigation/TabPanel",
  component: TabPanelDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TabPanelDemo>;

type Story = StoryObj<typeof TabPanelDemo>;

export const Default: Story = {
  args: {
    initialValue: 0,
  },
};

export const SecondPanel: Story = {
  args: {
    initialValue: 1,
  },
};
