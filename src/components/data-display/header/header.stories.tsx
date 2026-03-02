import type { Meta, StoryObj } from "@storybook/react";
import { ArrowLeft } from "lucide-react";
import { Content } from "@/components/containers/content/content";
import { Badge } from "@/components/data-display/badge/badge";
import { TabPanel } from "@/components/navigation/tab-panel/tab-panel";
import { TabProvider } from "@/components/navigation/tab-provider/tab-provider.provider";
import { Header } from "./header";
import { actions, breadcrumbs, linkedTabs, tabs } from "./header.dummy";
import type { HeaderAction } from "./header.types";

const mixedActions: HeaderAction[] = [
  {
    id: "save-primary",
    text: "Primary contained",
    variant: "contained",
    color: "primary",
  },
  {
    id: "edit-secondary",
    text: "Secondary outlined",
    variant: "outlined",
    color: "secondary",
  },
  {
    id: "archive-info",
    text: "Info text",
    variant: "text",
    color: "info",
  },
  {
    id: "remove-error",
    text: "Error outlined",
    variant: "outlined",
    color: "error",
  },
];

export default {
  title: "Data Display/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    actions,
  },
};

export const WithPanelTabs = () => (
  <TabProvider>
    <Header
      title="Lorem ipsum"
      subtitle="Dolor sit amet"
      preset="paper"
      border
      tabsMode="panel"
      tabs={tabs}
    />
    <Content>
      <TabPanel index={0}>Panel Tab 1</TabPanel>
      <TabPanel index={1}>Panel Tab 2</TabPanel>
      <TabPanel index={2}>Panel Tab 3</TabPanel>
    </Content>
  </TabProvider>
);

export const NavigationButton: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    navigationButton: {
      text: "Go back",
      href: "/back",
      icon: <ArrowLeft size={16} />,
    },
  },
};

export const CustomTitle: Story = {
  args: {
    ...Default.args,
    title: (
      <div className="flex items-center">
        <h6 className="text-lg font-medium">custom title</h6>
        <Badge variant="primary" text="4 items" className="ml-2" />
      </div>
    ),
  },
};

export const PrimaryPreset: Story = {
  args: {
    ...Default.args,
    preset: "primary",
  },
};

export const SecondaryPreset: Story = {
  args: {
    ...Default.args,
    preset: "secondary",
  },
};

export const PaperPresetWithBorder: Story = {
  args: {
    ...Default.args,
    preset: "paper",
    border: true,
  },
};

export const TransparentWithTabs: Story = {
  args: {
    ...Default.args,
    preset: "transparent",
    tabs: linkedTabs,
    border: true,
  },
};

export const MixedActionVariantsAndColors: Story = {
  args: {
    ...Default.args,
    actionsVariant: "contained",
    actions: mixedActions,
  },
};
