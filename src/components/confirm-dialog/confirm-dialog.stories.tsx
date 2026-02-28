import type { Meta, StoryObj } from "@storybook/react";
import { StoryDialogManager } from "@/storybook";
import ConfirmDialog from "./confirm-dialog";

export default {
  title: "Dialogs/ConfirmDialog",
  component: ConfirmDialog,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_code: string, storyContext: any) => {
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
              return `${key}={${JSON.stringify(value)}}`;
            })
            .filter(Boolean)
            .join("\n  ");

          return `<ConfirmDialog\n  ${props}\n  onConfirm={handleConfirm}\n  onCancel={handleCancel}\n>\n  {children}\n</ConfirmDialog>`;
        },
      },
    },
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
} satisfies Meta<typeof ConfirmDialog>;

type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Lorem ipsum",
    children: (
      <span className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    ),
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `import { useState } from 'react';
import { ConfirmDialog } from '@pautena/react-design-system';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Confirm Dialog</button>
      <ConfirmDialog
        open={open}
        title="Lorem ipsum"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to proceed?</p>
      </ConfirmDialog>
    </>
  );
}`,
    },
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
      <span className="text-sm text-muted-foreground">
        Write the passphrase to confirm your action
      </span>
    ),
    passphrase: "delete permanently",
  },
};
