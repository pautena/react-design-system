import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { Meta } from "@storybook/react";
import { Content } from "@/components/content";
import { SkeletonGrid } from "@/components/skeleton-grid";
import { useNotificationCenter } from "./NotificationCenter.context";
import { NotificationCenterProvider } from "./NotificationCenter.provider";

const DummyError = {
  title: "Internal Server error",
  message: "Unable to save the item",
};

export default {
  title: "Feedback/NotificationCenter",
  component: Content,
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
} satisfies Meta<typeof Content>;

export const Default = () => {
  const { show, hide } = useNotificationCenter();

  return (
    <Content className="p-2">
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
      <SkeletonGrid size={3} />
    </Content>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `import { NotificationCenterProvider, useNotificationCenter } from './NotificationCenter';

function App() {
  return (
    <NotificationCenterProvider>
      <MyComponent />
    </NotificationCenterProvider>
  );
}

function MyComponent() {
  const { show, hide } = useNotificationCenter();

  const handleClick = () => {
    show({
      severity: "success",
      title: "Success",
      message: "Operation completed successfully"
    });
  };

  return <button onClick={handleClick}>Show Notification</button>;
}`,
    },
  },
};
