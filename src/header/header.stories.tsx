import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";
import { withMemoryRouter } from "../storybook";
import { breadcrumbs, tabs, actions, linkedTabs } from "./header.dummy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TabProvider } from "../tab-provider";
import { Content } from "../content";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TabPanel } from "../tab-panel";
import { Route, Routes, useLocation } from "react-router-dom";
import { Label } from "../label";

export default {
  title: "Components/Data Display/Header",
  component: Header,
  decorators: [withMemoryRouter()],
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
    <Header title="Lorem ipsum" subtitle="Dolor sit amet" tabsMode="panel" tabs={tabs} />
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

export const WithLinkedTabs = () => {
  const location = useLocation();

  return (
    <Box>
      <Header
        title="Lorem ipsum"
        subtitle="Dolor sit amet"
        tabsMode="navigation"
        tabs={linkedTabs}
      />
      <Content>
        <>
          <Typography>Location: {location.pathname}</Typography>
          <Routes>
            <Route path="/tab/tab1" element={<Typography>Panel: /tab/tab1</Typography>} />
            <Route path="/tab/tab2" element={<Typography>Panel: /tab/tab2</Typography>} />
            <Route path="/tab/tab3" element={<Typography>Panel: /tab/tab3</Typography>} />
            <Route path="/" element={<Typography>Home</Typography>} />
          </Routes>
        </>
      </Content>
    </Box>
  );
};

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
