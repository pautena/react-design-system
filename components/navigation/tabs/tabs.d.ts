import { ComponentProps, ReactNode } from '../../../../node_modules/react';
import { Tabs as UiTabs, TabsContent as UiTabsContent, TabsList as UiTabsList, TabsTrigger as UiTabsTrigger } from '../../ui/tabs';
/**
 * Props for the Tabs component.
 */
export interface TabsProps extends ComponentProps<typeof UiTabs> {
    /**
     * Content rendered inside the tabs root.
     */
    children?: ReactNode;
    /**
     * Orientation of the tabs.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
}
/**
 * Props for the TabsList component.
 */
export interface TabsListProps extends ComponentProps<typeof UiTabsList> {
    /**
     * Content rendered inside the tabs list.
     */
    children?: ReactNode;
    /**
     * Visual style for the tabs list.
     * @default "default"
     */
    variant?: "default" | "line";
}
/**
 * Props for the TabsTrigger component.
 */
export interface TabsTriggerProps extends ComponentProps<typeof UiTabsTrigger> {
    /**
     * Content rendered inside the tab trigger.
     */
    children?: ReactNode;
}
/**
 * Props for the TabsContent component.
 */
export interface TabsContentProps extends ComponentProps<typeof UiTabsContent> {
    /**
     * Content rendered inside the tab panel.
     */
    children?: ReactNode;
}
/**
 * Consumer-facing tabs wrapper for public package API.
 */
export declare function Tabs(props: TabsProps): import("react/jsx-runtime").JSX.Element;
/**
 * Tabs list wrapper for public package API.
 */
export declare function TabsList(props: TabsListProps): import("react/jsx-runtime").JSX.Element;
/**
 * Tabs trigger wrapper for public package API.
 */
export declare function TabsTrigger(props: TabsTriggerProps): import("react/jsx-runtime").JSX.Element;
/**
 * Tabs content wrapper for public package API.
 */
export declare function TabsContent(props: TabsContentProps): import("react/jsx-runtime").JSX.Element;
