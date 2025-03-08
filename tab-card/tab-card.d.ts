import { PropsWithChildren, ReactElement } from '../../node_modules/react';
export interface TabData {
    text: string;
    icon?: ReactElement;
}
export type TabCardProps = PropsWithChildren<{
    tabs: TabData[];
    initialTab?: number;
    onChangeTab?: (tab: TabData, index: number) => void;
}>;
export declare const TabCard: ({ children, tabs, initialTab, onChangeTab, }: TabCardProps) => import("react/jsx-runtime").JSX.Element;
