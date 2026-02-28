import type { Meta } from "@storybook/react";
import Button from "@/components/button";
import Content from "@/components/content";
import SkeletonGrid from "@/components/skeleton-grid";
import { useNotificationCenter } from "./notification-center-context";
import { NotificationCenterProvider } from "./notification-center-provider";

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
      <div className="flex flex-wrap gap-2 pb-2">
        <Button onClick={() => show({ ...DummyError, severity: "info" })}>
          Show info
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "success" })}>
          Show success
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "warning" })}>
          Show warning
        </Button>
        <Button onClick={() => show({ ...DummyError, severity: "error" })}>
          Show error
        </Button>
        <Button onClick={hide}>hide</Button>
      </div>
      <SkeletonGrid size={3} />
    </Content>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `import { NotificationCenterProvider, useNotificationCenter } from '@pautena/react-design-system';

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
