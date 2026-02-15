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
export declare const NotificationCenterProvider: ({ children, autoHideDuration, }: NotificationCenterProviderProps) => import("react/jsx-runtime").JSX.Element;
