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
  parameters: {
    docs: {
      source: {
        code: `<FormDialog
  open={open}
  title="Lorem ipsum"
  onClose={handleClose}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
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
</FormDialog>`,
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
        code: `<FormDialog
  open={open}
  title="Lorem ipsum"
  loading
  onClose={handleClose}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
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
</FormDialog>`,
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
        code: `<FormDialog
  open={open}
  title="Lorem ipsum"
  disabled
  onClose={handleClose}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
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
</FormDialog>`,
      },
    },
  },
};

export const CustomButtonText: Story = {
  args: {
    ...Default.args,
    submitText: "Create token",
    cancelText: "Don't create a token",
  },
  parameters: {
    docs: {
      source: {
        code: `<FormDialog
  open={open}
  title="Lorem ipsum"
  submitText="Create token"
  cancelText="Don't create a token"
  onClose={handleClose}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
>
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
</FormDialog>`,
      },
    },
  },
};
