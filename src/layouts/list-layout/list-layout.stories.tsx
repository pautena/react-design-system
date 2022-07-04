import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { ListLayout } from "./list-layout";
import { useDemoData } from '@mui/x-data-grid-generator';
import { withRouter } from "storybook-addon-react-router-v6";


const maxColumns = 3;
const editable = true;
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

export default {
  title: "Layouts/ListLayout",
  component: ListLayout,
  decorators:[withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListLayout>;

const Template = createTemplate(({loading,dataSetType,size, listProps,...rest})=>{
  const { loading: demoLoading, data } = useDemoData({
    dataSet: dataSetType,
    rowLength: size,
    maxColumns,
    editable,
  });

  const {rows} = data;
  const columns = data.columns.map(({field,headerName})=>({
    id:field,
    label:headerName,
    sort:true,
  }))

  return <ListLayout listProps={{ ...listProps, loading: demoLoading || loading, data:rows, columns }} {...rest}/>
});

export const Default = Template.bind({});
Default.args = {
  size: 100,
  dataSetType:'Commodity',
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions:[{
      id:'new',
      text:"Add",
    }]
  },
  listProps: {
    search: true
  }
};


