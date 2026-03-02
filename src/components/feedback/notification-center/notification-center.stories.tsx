import type { Meta } from "@storybook/react";
import { Content } from "@/components/containers/content/content";
import { Button } from "@/components/inputs/button/button";
import { SkeletonGrid } from "@/components/placeholders/skeleton-grid/skeleton-grid";
import { useNotificationCenter } from "./notification-center-context";
import { NotificationCenterProvider } from "./notification-center-provider";

const Notifications = {
  info: {
    title: "Heads up",
    message: "We are syncing your preferences in the background.",
  },
  success: {
    title: "Saved",
    message: "Your changes were stored successfully.",
  },
  warning: {
    title: "Check details",
    message: "Some fields need attention before continuing.",
  },
  error: {
    title: "Internal Server error",
    message: "Unable to save the item. Try again later.",
  },
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
  const { toast } = useNotificationCenter();

  return (
    <Content className="p-2">
      <div className="flex flex-wrap gap-2 pb-2">
        <Button
          variant="info"
          onClick={() =>
            toast.info(Notifications.info.title, {
              description: Notifications.info.message,
            })
          }
        >
          Show info
        </Button>
        <Button
          variant="success"
          onClick={() =>
            toast.success(Notifications.success.title, {
              description: Notifications.success.message,
            })
          }
        >
          Show success
        </Button>
        <Button
          variant="warning"
          onClick={() =>
            toast.warning(Notifications.warning.title, {
              description: Notifications.warning.message,
            })
          }
        >
          Show warning
        </Button>
        <Button
          variant="error"
          onClick={() =>
            toast.error(Notifications.error.title, {
              description: Notifications.error.message,
            })
          }
        >
          Show error
        </Button>
        <Button variant="outline" onClick={() => toast.dismiss()}>
          hide
        </Button>
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
  const { toast } = useNotificationCenter();

  const handleClick = () => {
    toast.success("Success", {
      description: "Operation completed successfully",
    });
  };

  return <button onClick={handleClick}>Show Notification</button>;
}`,
    },
  },
};
