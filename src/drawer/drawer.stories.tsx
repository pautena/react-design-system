import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "../drawer-content";
import { Drawer, DrawerProvider } from "../drawer-provider";
import { mockDrawerNavigation } from "./drawer.mock";
import { DrawerState } from "./drawer.types";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

export default {
  title: "Components/Drawers/Drawer",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider initialState={initialState} variant="mini" selectedItemId={selectedItemId}>
      <Drawer>
        <DrawerContent nav={mockDrawerNavigation} />
      </Drawer>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;
type Story = StoryObj<DrawerDemoArgs>;

export const Default: Story = {
  args: {
    selectedItemId: "item2.3.2",
    initialState: "open",
  },
};
