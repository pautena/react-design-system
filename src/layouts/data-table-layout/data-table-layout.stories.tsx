import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DataTableLayout } from "./data-table-layout";
import { useDemoData } from '@mui/x-data-grid-generator';
import { withRouter } from "storybook-addon-react-router-v6";


const maxColumns = 7;
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
  title: "Layouts/DataTableLayout",
  component: DataTableLayout,
  decorators:[withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DataTableLayout>;

const Template = createTemplate(({loading,dataSetType,size, dataGridProps,...rest})=>{
  const { loading: demoLoading, data } = useDemoData({
    dataSet: dataSetType,
    rowLength: size,
    maxColumns,
    editable,
  });
  return <DataTableLayout dataGridProps={{ loading: demoLoading || loading,...data,...dataGridProps}} {...rest}/>
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
  dataGridProps: {
    height: 500
  }
};

export const Loading = Template.bind({});
Loading.args = {
  size: 100,
  dataSetType:'Commodity',
  headerProps: {
    title:"Lorem ipsum"
  },
  dataGridProps: {
    height: 500
  },
  loading:true
};


