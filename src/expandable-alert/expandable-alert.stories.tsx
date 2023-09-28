import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ExpandableAlert } from "./expandable-alert";
import { withContainer } from "~/storybook";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

export default {
  title: "Components/Alerts/ExpandableAlert",
  component: ExpandableAlert,
  decorators: [withContainer({ width: 500 })],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ExpandableAlert>;
type Story = StoryObj<typeof ExpandableAlert>;

export const Info: Story = {
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
    metadata: ["lorem: ipsum", "foo: bar", "header: this", "host: localhost"],
  },
};

export const Success: Story = {
  args: {
    ...Info.args,
    severity: "success",
  },
};

export const Error: Story = {
  args: {
    ...Info.args,
    severity: "error",
  },
};

export const Warning: Story = {
  args: {
    ...Info.args,
    severity: "warning",
  },
};

export const WihtoutMetadata: Story = {
  args: {
    severity: "info",
    title: "Lorem ipsum",
    message: "Lorem ipsum dolor sit amet",
  },
};

export const MetadataCustomComponent = () => (
  <ExpandableAlert
    severity="info"
    onClose={() => null}
    title="Lorem ipsum"
    message="Lorem ipsum dolor sit amet"
    metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]}
    metadataComponent={
      <>
        <Typography variant="h6">lorem: ipsum</Typography>
        <Typography variant="caption">foo: bar</Typography>
        <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
          header: this
        </Typography>
        <Typography variant="body2" fontWeight={700}>
          host: localhost
        </Typography>
      </>
    }
  />
);

export const SnackbarAlert = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Snackbar
      </Button>
      <Snackbar open={open}>
        <ExpandableAlert
          severity="info"
          onClose={() => setOpen(false)}
          title="Lorem ipsum"
          message="Lorem ipsum dolor sit amet"
          metadata={["lorem: ipsum", "foo: bar", "header: this", "host: localhost"]}
        />
      </Snackbar>
    </Box>
  );
};
