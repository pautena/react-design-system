import { Grid, TextField } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { StoryDialogManager } from "~/storybook";
import { FormDialog } from "./form-dialog";

export default {
  title: "Components/Dialogs/FormDialog",
  component: FormDialog,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof FormDialog>;

const Template: ComponentStory<typeof FormDialog> = (args) => (
  <StoryDialogManager component={FormDialog} args={args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Lorem ipsum",
  children: (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField name="message" label="Message" fullWidth required variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="amount" label="Amount" fullWidth required variant="outlined" />
      </Grid>
    </Grid>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const CustomButtonText = Template.bind({});
CustomButtonText.args = {
  ...Default.args,
  submitText: "Create token",
  cancelText: "Don't create a token",
};
