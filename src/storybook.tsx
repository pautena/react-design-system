import { Box, Button, type SxProps, type Theme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { action } from "storybook/actions";
/* eslint-disable react/display-name */
import { type FunctionComponent, useState } from "react";
import { NotificationCenterProvider } from "./notification-center";

const closeDialogAction = action("dialog/close");

export const withNotificationCenter = (Story: FunctionComponent) => {
  return (
    <NotificationCenterProvider>
      <Story />
    </NotificationCenterProvider>
  );
};

export const withFullHeight = (Story: FunctionComponent) => {
  return (
    <Box height="100vh">
      <Story />
    </Box>
  );
};

export const withContainer =
  ({
    width,
    height,
    bordered,
    backgroundColor,
    padding,
  }: {
    width?: number;
    height?: number;
    bordered?: boolean;
    backgroundColor?: string;
    padding?: number;
  }) =>
  (Story: FunctionComponent) => {
    let sx: SxProps<Theme> = {
      backgroundColor,
      padding,
    };
    if (bordered) {
      sx = {
        ...sx,
        border: "solid 1px black",
      };
    }
    return (
      <Box width={width} height={height} sx={sx}>
        <Story />
      </Box>
    );
  };

export const withPadding =
  (padding = 2) =>
  (Story: FunctionComponent) => {
    return (
      <Box padding={padding}>
        <Story />
      </Box>
    );
  };

export const withLocalizationProvider = (Story: FunctionComponent) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Story />
    </LocalizationProvider>
  );
};

export const StoryDialogManager = ({
  component: C,
  args,
}: {
  component: FunctionComponent<any>;
  args: any;
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = (key: string) => {
    setOpen(false);
    closeDialogAction(key);
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <C
        {...args}
        open={open}
        onClose={() => handleClose("close")}
        onCancel={() => handleClose("cancel")}
        onAccept={() => handleClose("accept")}
        onConfirm={() => handleClose("confirm")}
        onSubmit={() => handleClose("submit")}
      />
    </Box>
  );
};
