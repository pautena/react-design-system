import { CSSProperties, ReactNode } from '../../../../node_modules/react';
/**
 * Props for the TabCardPanel component.
 */
export interface TabCardPanelProps {
    /**
     * Tab index or list of indices linked to this panel.
     */
    index: number | number[];
    /**
     * Legacy style prop kept for compatibility.
     */
    sx?: CSSProperties;
    /**
     * Panel content.
     */
    children?: ReactNode;
}
/**
 * Content panel rendered only when linked tab is selected.
 */
export declare function TabCardPanel({ index, sx, children }: TabCardPanelProps): import("react/jsx-runtime").JSX.Element | null;
