import { Box } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import { createTemplate } from "../../storybook";
import { LoadingArea } from "./loading-area";

export default {
  title: "Components/LoadingArea",
  component: LoadingArea,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoadingArea>;

const Template = createTemplate((args)=>{

  return (
    <Box height={300} border="solid 1px black">
      <LoadingArea {...args}/>
    </Box>
  )
});

export const Default = Template.bind({});
Default.args = {
};