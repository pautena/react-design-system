import { type ToasterProps, toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { NotificationCenterContext } from "./notification-center-context";

/**
 * Props for the NotificationCenterProvider component.
 */
export interface NotificationCenterProviderProps extends ToasterProps {
  /**
   * Content to wrap with notification context.
   */
  children?: React.ReactNode;
}

export const NotificationCenterProvider = ({
  children,
  ...toasterProps
}: NotificationCenterProviderProps) => {
  return (
    <NotificationCenterContext.Provider
      value={{
        toast,
      }}
    >
      <Toaster
        position="top-right"
        closeButton
        duration={6000}
        {...toasterProps}
      />
      {children}
    </NotificationCenterContext.Provider>
  );
};
