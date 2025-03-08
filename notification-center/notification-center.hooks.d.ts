import { Notification } from './notification-center.context';
export interface NotifyWhenValueChangesOptions<T> {
    from: T;
    to: T;
}
export declare const useNotifyWhenValueChanges: <T>(notification: Notification, value: T | undefined, { from, to }: NotifyWhenValueChangesOptions<T>) => void;
