import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "@/components/containers/content/content";
import { Drawer } from "@/components/navigation/drawer/drawer";
import { mockDrawerNavigation } from "@/components/navigation/drawer/drawer.mock";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { useDrawer } from "@/components/navigation/drawer-context/drawer-context";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import { DrawerMain } from "@/components/navigation/drawer-main/drawer-main";
import { SkeletonGrid } from "@/components/placeholders/skeleton-grid/skeleton-grid";
import { Button } from "@/components/ui/button";
import type { DrawerState } from "@/types/drawer.types";

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

const code = `import {
  Content,
  Drawer,
  DrawerContent,
  DrawerMain,
  DrawerProvider,
  SkeletonGrid,
  Button,
} from "@pautena/react-design-system";
import { useDrawer } from "@pautena/react-design-system";
import { mockDrawerNavigation } from "@pautena/react-design-system";

function DrawerToggleButton() {
  const { state, switchState } = useDrawer();
  return (
    <Button type="button" variant="outline" size="sm" onClick={switchState}>
      {state === "open" ? "Collapse drawer" : "Expand drawer"}
    </Button>
  );
}

function App() {
  return (
    <DrawerProvider initialState="open" selectedItemId="item2.3.2">
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
  );
}`;

export default {
  title: "Examples/Drawer demo",
  parameters: {
    layout: "fullscreen",
    docs: {
      source: { code },
    },
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
