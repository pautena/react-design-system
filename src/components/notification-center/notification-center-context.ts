import { createContext, useContext } from "react";

export const NotificationCenterProviderUndefinedError = new Error(
  "NotificationCenterContext.Provider is required and was undefined",
);

/**
 * Supported severities for notifications.
 */
export type NotificationSeverity = "success" | "info" | "warning" | "error";

/**
 * Notification payload definition.
 */
export interface Notification {
  /**
   * Severity level for the notification.
   */
  severity: NotificationSeverity;
  /**
   * Optional notification title.
   */
  title?: string;
  /**
   * Main notification message.
   */
  message: string;
}

export interface NotificationCenterProps {
  /**
   * Shows a notification.
   */
  show(notification: Notification): void;
  /**
   * Hides the active notification.
   */
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
