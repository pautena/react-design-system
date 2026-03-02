import type { Meta, StoryObj } from "@storybook/react";
import { withContainer } from "@/storybook";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  decorators: [withContainer({ width: 420, padding: 2 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="activity">Recent activity content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="profile">
      <TabsList variant="line">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Profile content</TabsContent>
      <TabsContent value="billing">Billing content</TabsContent>
    </Tabs>
  ),
};
