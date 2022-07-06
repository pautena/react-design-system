import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { ListLayout } from "./list-layout";
import { useDemoData } from '@mui/x-data-grid-generator';
import { withRouter } from "storybook-addon-react-router-v6";
import { PlaceholderIconArgs } from "../../components";
import BackupTableIcon from '@mui/icons-material/BackupTable';


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

const args = {
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
  },
  emptyPlaceholderProps: {
    title: "No item has found",
    subtitle:"First you have to create an item",
    icon:({size,color}:PlaceholderIconArgs)=><BackupTableIcon color={color} sx={{fontSize:size}}/>,
    actions:[{
      id:'add',
      text:'Add',
      href: '/item/add'
    }]
  }
}

export default {
  title: "Layouts/ListLayout",
  component: ListLayout,
  decorators:[withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListLayout>;

const Template = createTemplate(({loading,dataSetType,size, listProps,...rest})=>{
  const { data } = useDemoData({
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

  return <ListLayout loading={loading} listProps={{ ...listProps, data:rows, columns }} {...rest}/>
});

export const Default = Template.bind({});
Default.args = {
  ...args
};

export const Loading = Template.bind({});
Loading.args = {
  ...args,
  loading:true,
};


export const Empty = Template.bind({});
Empty.args = {
  ...args,
  size:0,
};


