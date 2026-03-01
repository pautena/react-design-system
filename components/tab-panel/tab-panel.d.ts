import { ReactNode } from '../../../node_modules/react';
/**
 * Props for the TabPanel component
 */
export interface TabPanelProps {
    /**
     * Panel content
     */
    children?: ReactNode;
    /**
     * Tab index or array of indices that this panel corresponds to
     */
    index: number | number[];
    /**
     * Optional wrapper classes
     */
    className?: string;
}
/**
 * Content panel that displays when its associated tab is active
 */
export declare function TabPanel({ children, index, className }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
