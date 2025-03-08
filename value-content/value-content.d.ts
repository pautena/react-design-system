import { SxProps, Theme } from '@mui/material/styles';
export declare const getValueContentLabelId: (label: string) => string;
export interface ValueContentProps {
    /**
     * Name of the displayed value
     */
    label: string;
    /**
     * If true, the label will not be shown
     */
    hideLabel?: boolean;
    /**
     * If defined, a tooltip is going to be added arround the children;
     */
    tooltip?: string;
    /**
     * Timeout before the tooltip appears when the user hovers the value
     */
    tooltipEnterDelay?: number;
    /**
     * Component that's going to be renderd under the label
     */
    children: React.ReactElement<any, any>;
    /**
     * The value has to be displayed as compact or not.
     * False by default
     */
    dense?: boolean;
    /**
     * Custom styles for the root component
     */
    sx?: SxProps<Theme>;
}
/**
 * Displays a string value with a label
 */
export declare const ValueContent: ({ label, hideLabel, tooltip, tooltipEnterDelay, children, dense, sx, }: ValueContentProps) => import("react/jsx-runtime").JSX.Element;
