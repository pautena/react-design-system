import { ReactElement } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HeaderLayout, HeaderLayoutProps } from "../header-layout";
import { withLocalizationProvider } from "../storybook";
import { withFullHeight } from "../storybook";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDemoData } from "@mui/x-data-grid-generator";
import { mockModel, createModelInstance } from "../generators/generators.mock";
import { action } from "@storybook/addon-actions";
import { DataGrid } from "@mui/x-data-grid";
import { Header, HeaderProps, HeaderTab } from "../header";
import { Content } from "../content";
import { SkeletonGrid } from "../skeleton-grid";
import { TabPanel } from "../tab-panel";
import { TableList } from "../table-list";
import { ObjectDetails } from "../object-details";
import { ModelForm } from "../model-form";

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

const ListContent = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 3,
    editable: true,
  });

  const { rows } = data;
  const columns = data.columns.map(({ field, headerName }) => ({
    id: field,
    label: headerName || "",
    sort: true,
    disablePadding: false,
    numeric: false,
  }));

  return (
    <TableList
      data={rows as any}
      columns={columns}
      defaultSort={columns[0].id}
      defaultOrder="asc"
    />
  );
};

export const List: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <ListContent />,
  },
};

export const Details: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: <ObjectDetails model={mockModel} instance={createModelInstance(mockModel)} />,
  },
};

export const Form: Story = {
  args: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    slotProps: {
      header: {
        breadcrumbs,
        actions,
      },
    },
    children: (
      <ModelForm
        model={mockModel}
        initialValues={createModelInstance(mockModel)}
        saveButtonText="Save"
        onSubmit={action("Save form data")}
      />
    ),
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

  return <DataGrid rows={rows} columns={columns as any} pagination sx={{ height: 400 }} />;
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
