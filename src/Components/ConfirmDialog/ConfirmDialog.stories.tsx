import { DialogContentText } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";
import React from "react";
import { StoryDialogManager } from "~/Storybook";
import { ConfirmDialog } from "./ConfirmDialog";

export default {
  title: "Components/Dialogs/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
  render: (args) => <StoryDialogManager component={ConfirmDialog} args={args} />,
} as Meta<typeof ConfirmDialog>;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Lorem ipsum",
    children: <DialogContentText>{loremIpsum({ count: 1, units: "paragraph" })}</DialogContentText>,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomButtonText: Story = {
  args: {
    ...Default.args,
    confirmText: "Create token",
    cancelText: "Don't create a token",
  },
};

export const Passphrase: Story = {
  args: {
    title: "Lorem ipsum",
    children: (
      <DialogContentText sx={{ mb: 1 }}>
        Write the passphrase to confirm your action
      </DialogContentText>
    ),
    passphrase: "delete permanently",
  },
};
