import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DataTableLayout } from "./data-table";
import { useDemoData } from '@mui/x-data-grid-generator';


const maxColumns = 7;
const editable = true;

export default {
  title: "Layouts/DataTableLayout",
  component: DataTableLayout,
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
  headerProps: {
    title:"Lorem ipsum",
    dataSetType:'Commodity'
  },
  dataGridProps: {
    height: 500
  }
};

export const Loading = Template.bind({});
Loading.args = {
  size: 100,
  headerProps: {
    title:"Lorem ipsum",
    dataSetType:'Commodity'
  },
  dataGridProps: {
    height: 500
  },
  loading:true
};


