import { SxProps, Theme } from '@mui/material';
/**
 * Props for the TabCardPanel component
 */
export interface TabCardPanelProps {
    /**
     * Tab index or array of indices that this panel corresponds to
     */
    index: number | number[];
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
    /**
     * Content to display when the panel is active
     */
    children?: React.ReactNode;
}
/**
 * Content panel for TabCard that displays when its tab is active
 */
export default function TabCardPanel({ index, children, sx, }: TabCardPanelProps): import("react/jsx-runtime").JSX.Element | null;
