import { toast } from 'sonner';
export declare const NotificationCenterProviderUndefinedError: Error;
export interface NotificationCenterProps {
    /**
     * Sonner toast API.
     */
    toast: typeof toast;
}
export declare const NotificationCenterContext: import('../../../node_modules/react').Context<NotificationCenterProps | undefined>;
export declare const useNotificationCenter: () => NotificationCenterProps;
