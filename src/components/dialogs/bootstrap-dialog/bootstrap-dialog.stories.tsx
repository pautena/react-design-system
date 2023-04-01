import { DialogContentText } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { BootstrapDialog } from "./bootstrap-dialog";
import { loremIpsum } from "lorem-ipsum";
import React from "react";
import { StoryDialogManager } from "~/storybook";

const onClickAction = action("On click dialog action");

export default {
  title: "Components/Dialogs/BootstrapDialog",
  component: BootstrapDialog,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof BootstrapDialog>;

const Template: ComponentStory<typeof BootstrapDialog> = (args) => (
  <StoryDialogManager component={BootstrapDialog} args={args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum",
  children: <DialogContentText>{loremIpsum({ count: 1, units: "paragraph" })}</DialogContentText>,
};

export const AcceptableAndCancelable = Template.bind({});
AcceptableAndCancelable.args = {
  ...Default.args,
  acceptable: true,
  cancelable: true,
};

export const WithExtraActions = Template.bind({});
WithExtraActions.args = {
  ...Default.args,
  cancelable: true,
  actions: [
    {
      id: "action1",
      text: "Action 1",
      color: "error",
      onClick: onClickAction,
    },
    {
      id: "action2",
      text: "Action 2",
      onClick: onClickAction,
    },
  ],
};

export const LoadingWithAcceptable = Template.bind({});
LoadingWithAcceptable.args = {
  ...Default.args,
  acceptable: true,
  loading: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...WithExtraActions.args,
  disabled: true,
};

export const CustomTexts = Template.bind({});
CustomTexts.args = {
  ...Default.args,
  acceptable: true,
  cancelable: true,
  cancelText: "Cancel updated",
  acceptText: "Accept updated",
};
