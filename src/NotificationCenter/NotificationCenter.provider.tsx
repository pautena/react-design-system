import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import {
  type Notification,
  NotificationCenterContext,
} from "./NotificationCenter.context";

/**
 * Props for the NotificationCenterProvider component
 */
export interface NotificationCenterProviderProps {
  /**
   * Duration in milliseconds before auto-hiding notifications
   * @default 6000
   */
  autoHideDuration?: number;
  /**
   * Content to wrap with notification context
   */
  children?: React.ReactNode;
}

export const NotificationCenterProvider = ({
  children,
  autoHideDuration = 6000,
}: NotificationCenterProviderProps) => {
  const [notification, setNotification] = useState<Notification | undefined>(
    undefined,
  );
  const [open, setOpen] = useState(false);
  const show = (notification: Notification) => {
    setNotification(notification);
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <NotificationCenterContext.Provider
      value={{
        show,
        hide,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={hide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={hide}
          severity={notification?.severity}
          aria-label={notification?.severity}
          sx={{ width: "100%" }}
        >
          {notification?.title && (
            <AlertTitle>{notification?.title}</AlertTitle>
          )}
          {notification?.message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationCenterContext.Provider>
  );
};
