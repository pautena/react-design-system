import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { DrawerContent } from "./drawer-content";
import {mockNav} from '../drawer/drawer.mock'
import { Box } from "@mui/material";

export default {
  title: "Drawers/DrawerContent",
  component: DrawerContent,
  decorators:[(Story)=>{
    return (
      <Box maxWidth={300}>
        {<Story/>}
      </Box>
    );
  }],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DrawerContent>;

const Template = createTemplate(DrawerContent);

export const Default = Template.bind({});
Default.args = {
  nav:mockNav,
  open:true
};


