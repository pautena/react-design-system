import { ToasterProps } from 'sonner';
/**
 * Props for the NotificationCenterProvider component.
 */
export interface NotificationCenterProviderProps extends ToasterProps {
    /**
     * Content to wrap with notification context.
     */
    children?: React.ReactNode;
}
export declare const NotificationCenterProvider: ({ children, ...toasterProps }: NotificationCenterProviderProps) => import("react/jsx-runtime").JSX.Element;
