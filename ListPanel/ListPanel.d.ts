export interface ListPanelItem {
    id: string;
    text: string;
    tooltip?: string;
    href?: string;
    path?: string;
}
export interface ListPanelProps {
    /**
     * The ID of the item that should be selected by default.
     */
    defaultSelectedItem?: string;
    /**
     * The list of items to be displayed in the panel.
     */
    items: ListPanelItem[];
    /**
     * The mode of the list, either "panel" or "navigation".
     */
    listMode?: "panel" | "navigation";
    /**
     * The breakpoint for column layout.
     */
    colBreakpoint?: number;
    /**
     * Callback function that is called when the selected item changes.
     */
    onSelectedItemChange?: (id: string) => void;
    /**
     * Content to display in the panel area
     */
    children?: React.ReactNode;
}
/**
 * ListPanel component renders a panel with a list of items and a content area.
 */
export declare function ListPanel({ items, defaultSelectedItem, colBreakpoint, listMode, children, onSelectedItemChange, }: ListPanelProps): import("react/jsx-runtime").JSX.Element;
export default ListPanel;
