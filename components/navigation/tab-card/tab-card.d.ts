import { ReactElement, ReactNode } from '../../../../node_modules/react';
/**
 * Tab configuration data.
 */
export interface TabData {
    /**
     * Tab label text.
     */
    text: string;
    /**
     * Optional icon element.
     */
    icon?: ReactElement;
}
/**
 * Props for the TabCard component.
 */
export interface TabCardProps {
    /**
     * Array of tab configurations.
     */
    tabs: TabData[];
    /**
     * Index of the initially selected tab.
     * @default 0
     */
    initialTab?: number;
    /**
     * Callback when tab selection changes.
     * @param tab - The selected tab data.
     * @param index - Index of the selected tab.
     */
    onChangeTab?: (tab: TabData, index: number) => void;
    /**
     * Tab panel content.
     */
    children?: ReactNode;
}
/**
 * Card component with tabbed navigation.
 */
export declare function TabCard({ tabs, initialTab, onChangeTab, children, }: TabCardProps): import("react/jsx-runtime").JSX.Element;
