import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import type { HeaderTab } from "../Header";
import { HeaderLayout } from "../HeaderLayout";
import { SkeletonGrid } from "../SkeletonGrid";
import { withFullHeight, withLocalizationProvider } from "../storybook";
import { TabPanel } from "../TabPanel";
import { TablePlaceholder } from "../tests/table-placeholder";

const breadcrumbs = [
  {
    id: "list",
    text: "Items",
    link: "/items",
  },
  {
    id: "item",
    text: "Item 1",
    link: "/items/1",
  },
];

const actions = [
  {
    id: "new",
    text: "Add",
  },
];

const tabs: HeaderTab[] = [
  {
    id: "tab1",
    label: "Tab 1",
  },
  {
    id: "tab2",
    label: "Tab 2",
    disabled: true,
  },
  {
    id: "tab3",
    label: "Tab 3",
  },
];

export default {
  title: "Layouts/HeaderLayout",
  component: HeaderLayout,
  decorators: [withFullHeight, withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeaderLayout>;
type Story = StoryObj<typeof HeaderLayout>;

export const Skeleton: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const DataTable: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <TablePlaceholder />,
  },
};

export const Tabs: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
        tabs,
      },
    },
    children: (
      <Box>
        <TabPanel index={0}>
          <Typography>Panel 1</Typography>
        </TabPanel>
        <TabPanel index={[1, 2]}>
          <Typography>Panel 2</Typography>
        </TabPanel>
        <TabPanel index={3}>
          <Typography>Panel 3</Typography>
        </TabPanel>
      </Box>
    ),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const Fetching: Story = {
  args: {
    fetching: true,
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};

export const Error: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    error: {
      message: "There is no user with that id",
    },
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <SkeletonGrid />,
  },
};
