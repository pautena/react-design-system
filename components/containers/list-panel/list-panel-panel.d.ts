import { ReactNode } from '../../../../node_modules/react';
/**
 * Props for the ListPanelPanel component
 */
export interface ListPanelPanelProps {
    /**
     * List of item IDs that should display this panel
     */
    ids: string[];
    /**
     * Content to display when a matching item is selected
     */
    children?: ReactNode;
}
/**
 * Content panel for ListPanel that displays when a matching item is selected
 */
export declare function ListPanelPanel({ ids, children }: ListPanelPanelProps): import("react/jsx-runtime").JSX.Element | null;
