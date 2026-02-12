import type { Meta, StoryObj } from "@storybook/react";
import type { DrawerState } from "../Drawer.types";
import { DrawerContent } from "../DrawerContent";
import { DrawerProvider } from "../DrawerContext";
import { Drawer } from "./Drawer";
import { mockDrawerNavigation } from "./Drawer.mock";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

export default {
  title: "Components/Navigation/Drawer",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider
      initialState={initialState}
      variant="mini"
      selectedItemId={selectedItemId}
    >
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
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
