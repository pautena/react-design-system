import { DialogContentText } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";
import React from "react";
import { StoryDialogManager } from "~/storybook";
import { ConfirmDialog } from "./confirm-dialog";

export default {
  title: "Components/Dialogs/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args) => (
  <StoryDialogManager component={ConfirmDialog} args={args} />
);
export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Lorem ipsum",
  children: <DialogContentText>{loremIpsum({ count: 1, units: "paragraph" })}</DialogContentText>,
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
  confirmText: "Create token",
  cancelText: "Don't create a token",
};
