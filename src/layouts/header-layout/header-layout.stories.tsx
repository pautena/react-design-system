import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { HeaderLayout } from "./header-layout";
import { withRouter } from "storybook-addon-react-router-v6";
import {SkeletonGrid} from '../../tests'
import {withFullHeight} from '../../storybook/utils'

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
  title: "Layouts/HeaderLayout",
  component: HeaderLayout,
  decorators:[
    withRouter,
    withFullHeight
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HeaderLayout>;

const Template = createTemplate((args)=>{
  return (
    <HeaderLayout {...args}>
      <SkeletonGrid/>
    </HeaderLayout>
  )
});

export const Default = Template.bind({});
Default.args = {
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions:[{
      id:'new',
      text:"Add",
    }]
  },
};


export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  headerProps: {
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
    breadcrumbs,
    actions:[{
      id:'new',
      text:"Add",
    }]
  },
};

