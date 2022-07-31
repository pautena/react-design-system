/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertColor } from "@mui/material";
import React from "react";

export const NotificationCenterProviderUndefinedError = new Error(
  "NotificationCenterContext.Provider is required and was undefined",
);
export type SnackbarContentType =
  | React.ReactElement<any, any>
  | ((key: string) => React.ReactElement<any, any>);

export type SnackbarActionType = React.ReactNode | ((key: string) => React.ReactNode);

export interface Notification {
  severity: AlertColor;
  title?: string;
  message: string;
}

export interface NotificationCenterProps {
  show(notification: Notification): void;
  hide(): void;
}

export const NotificationCenterContext = React.createContext<NotificationCenterProps | undefined>(
  undefined,
);

export const useNotificationCenter = () => {
  const context = React.useContext(NotificationCenterContext);

  if (context === undefined) {
    throw NotificationCenterProviderUndefinedError;
  }

  return context;
};
