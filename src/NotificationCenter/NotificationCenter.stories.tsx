import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { Meta } from "@storybook/react";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { useNotificationCenter } from "./NotificationCenter.context";
import { NotificationCenterProvider } from "./NotificationCenter.provider";

const DummyError = {
  title: "Internal Server error",
  message: "Unable to save the item",
};

export default {
  title: "Feedback/NotificationCenter",
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
} satisfies Meta<typeof ContentPlaceholder>;

export const Default = () => {
  const { show, hide } = useNotificationCenter();

  return (
    <ContentPlaceholder size={3} p={2}>
      <Box pb={2}>
        <Button
          onClick={() => show({ ...DummyError, severity: "info" })}
          variant="contained"
        >
          Show info
        </Button>
        <Button
          onClick={() => show({ ...DummyError, severity: "success" })}
          variant="contained"
        >
          Show success
        </Button>
        <Button
          onClick={() => show({ ...DummyError, severity: "warning" })}
          variant="contained"
        >
          Show warning
        </Button>
        <Button
          onClick={() => show({ ...DummyError, severity: "error" })}
          variant="contained"
        >
          Show error
        </Button>
        <Button onClick={hide} variant="contained">
          hide
        </Button>
      </Box>
    </ContentPlaceholder>
  );
};
