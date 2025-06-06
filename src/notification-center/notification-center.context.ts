import type { AlertColor } from "@mui/material/Alert";
import { createContext, useContext } from "react";

export const NotificationCenterProviderUndefinedError = new Error(
  "NotificationCenterContext.Provider is required and was undefined",
);

export interface Notification {
  severity: AlertColor;
  title?: string;
  message: string;
}

export interface NotificationCenterProps {
  show(notification: Notification): void;
  hide(): void;
}

export const NotificationCenterContext = createContext<
  NotificationCenterProps | undefined
>(undefined);

export const useNotificationCenter = () => {
  const context = useContext(NotificationCenterContext);

  if (context === undefined) {
    throw NotificationCenterProviderUndefinedError;
  }

  return context;
};
