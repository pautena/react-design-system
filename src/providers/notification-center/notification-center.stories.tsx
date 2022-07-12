import React from "react";
import { ComponentMeta } from "@storybook/react";
import { NotificationCenterProvider } from "./notification-center.provider";
import { useNotificationCenter } from "./notification-center.context";
import { ContentPlaceholder } from "../../tests";
import { Button, Box } from "@mui/material";

const DummyError = {
  title: "Internal Server error",
  message: "Unable to save the item",
};

export default {
  title: "Providers/NotificationCenter",
  component: ContentPlaceholder,
  decorators: [
    (Story) => (
      <NotificationCenterProvider>
        <Story />
      </NotificationCenterProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ContentPlaceholder>;

export const Default = () => {
  const { show } = useNotificationCenter();

  return (
    <ContentPlaceholder size={3} p={2}>
      <Box pb={2}>
        <Button onClick={() => show({ ...DummyError, severity: "info" })} variant="contained">
          Show info
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "success" })} variant="contained">
          Show success
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "warning" })} variant="contained">
          Show warning
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "error" })} variant="contained">
          Show error
        </Button>
      </Box>
    </ContentPlaceholder>
  );
};
