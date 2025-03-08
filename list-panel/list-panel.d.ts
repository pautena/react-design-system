import { PropsWithChildren } from '../../node_modules/react';
export interface ListPanelItem {
    id: string;
    text: string;
    tooltip?: string;
    href?: string;
    path?: string;
}
export type ListPanelProps = PropsWithChildren<{
    defaultSelectedItem?: string;
    items: ListPanelItem[];
    listMode?: "panel" | "navigation";
    colBreakpoint?: number;
    onSelectedItemChange?: (id: string) => void;
}>;
export declare const ListPanel: ({ items, defaultSelectedItem, colBreakpoint, listMode, children, onSelectedItemChange, }: ListPanelProps) => import("react/jsx-runtime").JSX.Element;
