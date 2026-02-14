import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryDialogManager } from "../storybook";
import FormDialog from "./FormDialog";

export default {
  title: "Dialogs/FormDialog",
  component: FormDialog,
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
              return `${key}={${JSON.stringify(value)}}`;
            })
            .filter(Boolean)
            .join("\n  ");

          return `<FormDialog
  ${props}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
  {children}
</FormDialog>`;
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
  render: (args) => <StoryDialogManager component={FormDialog} args={args} />,
} as Meta<typeof FormDialog>;
type Story = StoryObj<typeof FormDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Lorem ipsum",
    children: (
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <TextField
            name="message"
            label="Message"
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            name="amount"
            label="Amount"
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
      </Grid>
    ),
  },
};

Default.parameters = {
  docs: {
    source: {
      code: `import { useState } from 'react';
import { FormDialog } from './FormDialog';

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Handle form submission
    console.log(data);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Form Dialog</button>
      <FormDialog
        open={open}
        title="Create Item"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField name="message" label="Message" fullWidth required />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField name="amount" label="Amount" fullWidth required />
          </Grid>
        </Grid>
      </FormDialog>
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
    submitText: "Create token",
    cancelText: "Don't create a token",
  },
};
