import DialogContentText from "@mui/material/DialogContentText";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryDialogManager } from "../storybook";
import ConfirmDialog from "./ConfirmDialog";

export default {
  title: "Dialogs/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <StoryDialogManager component={ConfirmDialog} args={args} />
  ),
} as Meta<typeof ConfirmDialog>;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Lorem ipsum",
    children: (
      <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DialogContentText>
    ),
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
