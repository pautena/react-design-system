import { Box } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Placeholder, PlaceholderAction, PlaceholderIconArgs } from "./placeholder";
import SearchIcon from "@mui/icons-material/Search";
import {action} from '@storybook/addon-actions';

const actions:PlaceholderAction[] =[{
  id:'add',
  text:'Add',
  href: '/placeholders/add'
},{
  id:'edit',
  text:'Edit',
  onClick: action('on click edit action')
}]

export default {
  title: "Components/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Placeholder>;

const Template = createTemplate(Placeholder);

export const Default = Template.bind({});
Default.args = {
  title:"Lorem ipsum dolor sit amet",
  subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon:({size,color}:PlaceholderIconArgs)=>  <SearchIcon color={color} sx={{fontSize:size}}/>,
  title:"Lorem ipsum dolor sit amet",
  subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor'
};

export const WithActions = Template.bind({});
WithActions.args = {
  icon:({size,color}:PlaceholderIconArgs)=>  <SearchIcon color={color} sx={{fontSize:size}}/>,
  title:"Lorem ipsum dolor sit amet",
  subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend at libero in tristique. Pellentesque bibendum arcu eget augue commodo, non convallis eros porttitor',
  actions,
};