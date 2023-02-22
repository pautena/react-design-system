import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { HeaderLayout, HeaderLayoutProps } from "./header-layout";
import { withMemoryRouter } from "~/storybook";
import { SkeletonGrid } from "../../tests/components";
import { withFullHeight } from "../../storybook";
import { Content, Header, HeaderProps, HeaderTab, TableList, TabPanel } from "../../components";
import { Box, Typography } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import { ModelForm, ObjectDetails } from "../../generators";
import { mockModel, createModelInstance } from "../../generators/generators.mock";
import { action } from "@storybook/addon-actions";
import { DataGrid } from "@mui/x-data-grid";

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
  decorators: [withMemoryRouter(), withFullHeight],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderLayout>;

interface HeaderLayoutStoryProps extends HeaderLayoutProps {
  headerProps: HeaderProps;
  contentChildren: ReactElement;
}

const Template = createTemplate(
  ({ headerProps, contentChildren, ...rest }: HeaderLayoutStoryProps) => {
    return (
      <HeaderLayout {...rest}>
        <Header {...headerProps} />
        <Content>{contentChildren}</Content>
      </HeaderLayout>
    );
  },
);

export const Skeleton = Template.bind({});
Skeleton.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <SkeletonGrid />,
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

export const List = Template.bind({});
List.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <ListContent />,
};

export const Details = Template.bind({});
Details.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <ObjectDetails model={mockModel} instance={createModelInstance(mockModel)} />,
};

export const Form = Template.bind({});
Form.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: (
    <ModelForm
      model={mockModel}
      initialValues={createModelInstance(mockModel)}
      saveButtonText="Save"
      onSubmit={action("Save form data")}
    />
  ),
};

const DataTableContent = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 7,
    editable: true,
  });

  return <DataGrid rows={data.rows} columns={data.columns} pagination sx={{ height: 400 }} />;
};

export const DataTable = Template.bind({});
DataTable.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <DataTableContent />,
};

export const Tabs = Template.bind({});
Tabs.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
    tabs,
  },
  contentChildren: (
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
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions,
  },
  contentChildren: <SkeletonGrid />,
};
