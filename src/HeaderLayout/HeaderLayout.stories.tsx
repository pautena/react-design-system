import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactElement } from "react";
import type { HeaderProps, HeaderTab } from "../Header";
import { HeaderLayout, type HeaderLayoutProps } from "../HeaderLayout";
import { SkeletonGrid } from "../SkeletonGrid";
import { withFullHeight, withLocalizationProvider } from "../storybook";
import { TabPanel } from "../TabPanel";

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

interface HeaderLayoutStoryProps extends HeaderLayoutProps {
  headerProps: HeaderProps;
  children: ReactElement;
}

const DummyHeaderLayout = ({ children, ...rest }: HeaderLayoutStoryProps) => {
  return <HeaderLayout {...rest}>{children}</HeaderLayout>;
};

export default {
  title: "Layouts/HeaderLayout",
  component: DummyHeaderLayout,
  decorators: [withFullHeight, withLocalizationProvider],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DummyHeaderLayout>;
type Story = StoryObj<typeof DummyHeaderLayout>;

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

const DataTableContent = () => {
  const {
    data: { rows, columns },
  } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 7,
    editable: true,
  });

  return (
    <DataGrid
      rows={rows}
      columns={columns as any}
      pagination
      sx={{ height: 400 }}
    />
  );
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
    children: <DataTableContent />,
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
