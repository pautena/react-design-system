import { PropsWithChildren } from '../../node_modules/react';
export type NotificationCenterProviderProps = PropsWithChildren<{
    autoHideDuration?: number;
}>;
export declare const NotificationCenterProvider: ({ children, autoHideDuration, }: NotificationCenterProviderProps) => import("react/jsx-runtime").JSX.Element;
