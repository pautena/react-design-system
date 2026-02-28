import { createContext, useContext } from "react";
import { toast } from "sonner";

export const NotificationCenterProviderUndefinedError = new Error(
  "NotificationCenterContext.Provider is required and was undefined",
);

export interface NotificationCenterProps {
  /**
   * Sonner toast API.
   */
  toast: typeof toast;
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
