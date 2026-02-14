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
    docs: {
      source: {
        transform: (code: string, storyContext: any) => {
          const { args } = storyContext;
          const props = Object.entries(args)
            .filter(([key]) => key !== "children")
            .map(([key, value]) => {
              if (typeof value === "boolean" && value === true) {
                return key;
              }
              if (typeof value === "string") {
                return `${key}="${value}"`;
              }
              if (typeof value === "function") {
                return `${key}={${key}}`;
              }
              if (Array.isArray(value)) {
                return `${key}={${JSON.stringify(value, null, 2).replace(/"(\w+)":/g, "$1:")}}`;
              }
              return `${key}={${JSON.stringify(value)}}`;
            })
            .filter(Boolean)
            .join("\n  ");

          return `<BootstrapDialog
  ${props}
  onClose={handleClose}
>
  {children}
</BootstrapDialog>`;
        },
      },
    },
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
};

Default.parameters = {
  docs: {
    source: {
      code: `import { useState } from 'react';
import { BootstrapDialog } from './BootstrapDialog';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <BootstrapDialog
        open={open}
        title="Lorem ipsum"
        onClose={() => setOpen(false)}
      >
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DialogContentText>
      </BootstrapDialog>
    </>
  );
}`,
    },
  },
};

export const AcceptableAndCancelable: Story = {
  args: {
    ...Default.args,
    acceptable: true,
    cancelable: true,
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
};

export const LoadingWithAcceptable: Story = {
  args: {
    ...Default.args,
    acceptable: true,
    loading: true,
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
    ...WithExtraActions.args,
    disabled: true,
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
};
