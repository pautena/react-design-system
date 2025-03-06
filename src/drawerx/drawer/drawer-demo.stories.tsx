import { Meta, StoryObj } from "@storybook/react";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider } from "../drawer-provider";
import { mockDrawerNavigation } from "./drawer.mock";
import { DrawerState, DrawerVariant } from "../drawer.types";
import { DrawerAppBar } from "../drawer-app-bar";
import { DrawerMain } from "../drawer-main";
import { Drawer } from "./drawer";
import { ContentPlaceholder } from "../../content-placeholder";

interface DrawerDemoArgs {
  initialState: DrawerState;
  variant: DrawerVariant;
  selectedItemId?: string;
  underAppBar?: boolean;
}

export default {
  title: "Components/Drawers/Drawer demo",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ initialState, variant, selectedItemId, underAppBar }) => (
    <DrawerProvider
      initialState={initialState}
      variant={variant}
      selectedItemId={selectedItemId}
      underAppBar={underAppBar}
    >
      <DrawerAppBar title="Drawer demo" />
      <Drawer>
        <DrawerContent navigation={mockDrawerNavigation} />
      </Drawer>
      <DrawerMain>
        <ContentPlaceholder p={3} />
      </DrawerMain>
    </DrawerProvider>
  ),
} satisfies Meta<DrawerDemoArgs>;
type Story = StoryObj<DrawerDemoArgs>;

export const Temporary: Story = {
  args: {
    variant: "temporary",
    selectedItemId: "item2.3.2",
  },
};

export const TemporaryUnder: Story = {
  args: {
    ...Temporary.args,
    variant: "temporary",
    underAppBar: true,
  },
};

export const Persistent: Story = {
  args: {
    ...Temporary.args,
    variant: "persistent",
  },
};

export const PersistentUnder: Story = {
  args: {
    ...Temporary.args,
    variant: "persistent",
    underAppBar: true,
  },
};

export const Clipped: Story = {
  args: {
    ...Temporary.args,
    variant: "clipped",
  },
};

export const ClippedUnder: Story = {
  args: {
    ...Temporary.args,
    variant: "clipped",
    underAppBar: true,
  },
};

export const MiniDrawer: Story = {
  args: {
    ...Temporary.args,
    variant: "mini",
  },
};
