import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "@/components/containers/content/content";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import { useDrawer } from "@/components/navigation/drawer-context/drawer-context";
import { DrawerMain } from "@/components/navigation/drawer-main/drawer-main";
import { SkeletonGrid } from "@/components/placeholders/skeleton-grid/skeleton-grid";
import { Button } from "@/components/ui/button";
import type { DrawerState } from "@/types/drawer.types";
import { Drawer } from "./drawer";

interface DrawerDemoArgs {
  initialState: DrawerState;
  selectedItemId?: string;
}

function DrawerToggleButton() {
  const { state, switchState } = useDrawer();

  return (
    <Button type="button" variant="outline" size="sm" onClick={switchState}>
      {state === "open" ? "Collapse drawer" : "Expand drawer"}
    </Button>
  );
}

export default {
  title: "Navigation/Drawer demo",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, selectedItemId }) => (
    <DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerMain>
        <Content className="space-y-3 p-3">
          <DrawerToggleButton />
          <SkeletonGrid />
        </Content>
      </DrawerMain>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;

type Story = StoryObj<DrawerDemoArgs>;

export const OpenByDefault: Story = {
  args: {
    initialState: "open",
    selectedItemId: "item2.3.2",
  },
};

export const ClosedByDefault: Story = {
  args: {
    initialState: "close",
    selectedItemId: "item2.3.2",
  },
};
