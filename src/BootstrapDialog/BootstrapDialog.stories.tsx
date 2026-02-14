import DialogContentText from "@mui/material/DialogContentText";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { StoryDialogManager } from "../storybook";
import BootstrapDialog from "./BootstrapDialog";

const onClickAction = action("On click dialog action");

export default {
  title: "Dialogs/BootstrapDialog",
  component: BootstrapDialog,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <StoryDialogManager component={BootstrapDialog} args={args} />
  ),
} satisfies Meta<typeof BootstrapDialog>;
type Story = StoryObj<typeof BootstrapDialog>;

export const Default: Story = {
  args: {
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
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  onClose={handleClose}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};

export const AcceptableAndCancelable: Story = {
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  acceptable
  cancelable
  onClose={handleClose}
  onCancel={handleCancel}
  onAccept={handleAccept}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};

export const WithExtraActions: Story = {
  args: {
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
  },
  parameters: {
    docs: {
      source: {
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  cancelable
  onClose={handleClose}
  onCancel={handleCancel}
  actions={[
    {
      id: "action1",
      text: "Action 1",
      color: "error",
      onClick: handleAction1,
    },
    {
      id: "action2",
      text: "Action 2",
      onClick: handleAction2,
    },
  ]}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};

export const LoadingWithAcceptable: Story = {
  args: {
    ...Default.args,
    acceptable: true,
    loading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  acceptable
  loading
  onClose={handleClose}
  onAccept={handleAccept}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
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
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  loading
  onClose={handleClose}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...WithExtraActions.args,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  cancelable
  disabled
  onClose={handleClose}
  onCancel={handleCancel}
  actions={[
    {
      id: "action1",
      text: "Action 1",
      color: "error",
      onClick: handleAction1,
    },
    {
      id: "action2",
      text: "Action 2",
      onClick: handleAction2,
    },
  ]}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};

export const CustomTexts: Story = {
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
    cancelText: "Cancel updated",
    acceptText: "Accept updated",
  },
  parameters: {
    docs: {
      source: {
        code: `<BootstrapDialog
  open={open}
  title="Lorem ipsum"
  acceptable
  cancelable
  cancelText="Cancel updated"
  acceptText="Accept updated"
  onClose={handleClose}
  onCancel={handleCancel}
  onAccept={handleAccept}
>
  <DialogContentText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DialogContentText>
</BootstrapDialog>`,
      },
    },
  },
};
