import { AlertColor } from '@mui/material/Alert';
export declare const NotificationCenterProviderUndefinedError: Error;
export interface Notification {
    severity: AlertColor;
    title?: string;
    message: string;
}
export interface NotificationCenterProps {
    show(notification: Notification): void;
    hide(): void;
}
export declare const NotificationCenterContext: import('../../node_modules/react').Context<NotificationCenterProps | undefined>;
export declare const useNotificationCenter: () => NotificationCenterProps;
