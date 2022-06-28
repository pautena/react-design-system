import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { Header } from "./header";
import {withRouter} from 'storybook-addon-react-router-v6';

export default {
  title: "Components/Header",
  component: Header,
  decorators:[withRouter],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template = createTemplate(Header);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
};


export const WithBreadcumbs = Template.bind({});
WithBreadcumbs.args = {
  title: "Lorem ipsum",
  breadcrumbs: [
    {
      id: "workouts",
      text: "Workouts",
      link: "/workouts",
    },
    {
      id: "detail",
      text: "Wod wed 19/04/2022",
      link: "/workouts/10043",
    },
  ],
};

