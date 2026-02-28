import { useRef } from "react";
import { toast, type ToastId } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  type Notification,
  NotificationCenterContext,
} from "./notification-center-context";

/**
 * Props for the NotificationCenterProvider component.
 */
export interface NotificationCenterProviderProps {
  /**
   * Duration in milliseconds before auto-hiding notifications.
   * @default 6000
   */
  autoHideDuration?: number;
  /**
   * Content to wrap with notification context.
   */
  children?: React.ReactNode;
}

export const NotificationCenterProvider = ({
  children,
  autoHideDuration = 6000,
}: NotificationCenterProviderProps) => {
  const lastToastId = useRef<ToastId | undefined>(undefined);

  const show = (notification: Notification) => {
    const { severity, title, message } = notification;
    const toastFn = toast[severity] ?? toast;
    lastToastId.current = title
      ? toastFn(title, { description: message })
      : toastFn(message);
  };

  const hide = () => {
    toast.dismiss(lastToastId.current);
  };

  return (
    <NotificationCenterContext.Provider
      value={{
        show,
        hide,
      }}
    >
      <Toaster
        position="top-right"
        closeButton
        duration={autoHideDuration}
      />
      {children}
    </NotificationCenterContext.Provider>
  );
};
