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
  argTypes: {
    open: {
      description: "Whether the dialog is open.",
    },
    title: {
      description: "The title of the dialog.",
    },
    loading: {
      description: "Whether the dialog is in a loading state.",
    },
    disabled: {
      description: "Whether the dialog is disabled.",
    },
    children: {
      description: "Children to be rendered inside the dialog.",
    },
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
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog
  open={open}
  title="Lorem ipsum"
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</ConfirmDialog>`,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog
  open={open}
  title="Lorem ipsum"
  loading
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</ConfirmDialog>`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog
  open={open}
  title="Lorem ipsum"
  disabled
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</ConfirmDialog>`,
      },
    },
  },
};

export const CustomButtonText: Story = {
  args: {
    ...Default.args,
    confirmText: "Create token",
    cancelText: "Don't create a token",
  },
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog
  open={open}
  title="Lorem ipsum"
  confirmText="Create token"
  cancelText="Don't create a token"
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</ConfirmDialog>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<ConfirmDialog
  open={open}
  title="Lorem ipsum"
  passphrase="delete permanently"
  onClose={handleClose}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
>
  <DialogContentText sx={{ mb: 1 }}>
    Write the passphrase to confirm your action
  </DialogContentText>
</ConfirmDialog>`,
      },
    },
  },
};
