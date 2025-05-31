import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "../content";
import { TabProvider } from "../tab-provider";
import { Header } from "./header";
import { actions, breadcrumbs, tabs } from "./header.dummy";

import { Label } from "../label";
import { TabPanel } from "../tab-panel";

export default {
  title: "Components/Data Display/Header",
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

export const OnlyTitle: Story = {
  args: {
    title: "Lorem ipsum",
  },
};

export const CustomTitle: Story = {
  args: {
    ...Default.args,
    title: (
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="h6">Lorem ipsum</Typography>
        <Label variant="primary" text="4 items" sx={{ ml: 1 }} />
      </Box>
    ),
  },
};

export const TitleLoading: Story = {
  args: {
    ...Default.args,
    loadingTitle: true,
  },
};

export const CustomSubtitle: Story = {
  args: {
    ...Default.args,
    subtitle: (
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="body2">Dolor sit amet</Typography>
        <Label variant="error" text="since yesterday" sx={{ ml: 1 }} />
      </Box>
    ),
  },
};

export const SubtitleLoading: Story = {
  args: {
    ...Default.args,
    loadingSubtitle: true,
  },
};

export const ColorInherit: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "inherit",
    breadcrumbs,
    tabs,
    actions,
  },
};

export const ColorPrimary: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "primary",
    breadcrumbs,
    tabs,
    actions,
  },
};

export const ColorSecondary: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "secondary",
    breadcrumbs,
    tabs,
    actions,
  },
};

export const ColorDefault: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    breadcrumbs,
    tabs,
    actions,
  },
};

export const ColorTransparent: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "transparent",
    breadcrumbs,
    tabs,
    actions,
  },
};

export const WithSubheader: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
  },
};

export const WithBreadcumbs: Story = {
  args: {
    title: "Lorem ipsum",
    breadcrumbs,
  },
};

export const WithActions: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    preset: "default",
    tabsMode: "panel",
    breadcrumbs,
    actions,
  },
};

export const WithPanelTabs = () => (
  <TabProvider>
    <Header
      title="Lorem ipsum"
      subtitle="Dolor sit amet"
      tabsMode="panel"
      tabs={tabs}
    />
    <Content>
      <TabPanel index={0}>
        <Typography>Panel Tab 1</Typography>
      </TabPanel>
      <TabPanel index={1}>
        <Typography>Panel Tab 2</Typography>
      </TabPanel>
      <TabPanel index={2}>
        <Typography>Panel Tab 3</Typography>
      </TabPanel>
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
      icon: <ArrowBackIcon />,
    },
  },
};
