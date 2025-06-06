import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import type { Meta, StoryObj } from "@storybook/react";
import { StoryDialogManager } from "../storybook";
import { FormDialog } from "./form-dialog";

export default {
  title: "Components/Dialogs/FormDialog",
  component: FormDialog,
  parameters: {
    layout: "centered",
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
