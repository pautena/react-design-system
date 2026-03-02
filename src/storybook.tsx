/* eslint-disable react/display-name */
import { type CSSProperties, type FunctionComponent, useState } from "react";
import { action } from "storybook/actions";
import { NotificationCenterProvider } from "@/components/feedback/notification-center/notification-center-provider";
import { SidebarMenu } from "@/components/ui/sidebar";

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
    <div style={{ minHeight: "100vh" }}>
      <Story />
    </div>
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
    const style: CSSProperties = {
      width,
      height,
      backgroundColor,
      padding: typeof padding === "number" ? `${padding * 8}px` : undefined,
    };

    if (bordered) {
      style.border = "1px solid #111";
    }

    return (
      <div style={style}>
        <Story />
      </div>
    );
  };

export const withPadding =
  (padding = 2) =>
  (Story: FunctionComponent) => {
    return (
      <div style={{ padding: `${padding * 8}px` }}>
        <Story />
      </div>
    );
  };

export const withDrawerMenu = (Story: FunctionComponent) => {
  return (
    <div className="bg-sidebar text-sidebar-foreground [&_[data-slot=sidebar-wrapper]]:min-h-0 [&_[data-slot=sidebar-wrapper]]:h-auto">
      <SidebarMenu className="list-none m-0 p-2">
        <Story />
      </SidebarMenu>
    </div>
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
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        Open
      </button>
      <C
        {...args}
        open={open}
        onClose={() => handleClose("close")}
        onCancel={() => handleClose("cancel")}
        onAccept={() => handleClose("accept")}
        onConfirm={() => handleClose("confirm")}
        onSubmit={() => handleClose("submit")}
      />
    </div>
  );
};
