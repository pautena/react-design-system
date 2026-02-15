/**
 * Props for the TabPanel component
 */
interface TabPanelProps {
    /**
     * Panel content
     */
    children?: React.ReactNode;
    /**
     * Tab index or array of indices that this panel corresponds to
     */
    index: number | number[];
}
/**
 * Content panel that displays when its associated tab is active
 */
export declare function TabPanel({ children, index }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
