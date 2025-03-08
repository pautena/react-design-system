import { SxProps, Theme } from '@mui/material/styles';
export type LabelVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error" | "success";
export declare const labelClasses: {
    root: string;
};
export interface LabelProps {
    /**
     * Content of the component
     */
    text: string;
    /**
     * Color palette used to draw the component
     */
    variant?: LabelVariant;
    /**
     * Background color. Overrides variant
     */
    color?: string;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
    /**
     * Show the text as uppercase
     */
    textTransform?: "none" | "capitalize" | "uppercase";
}
/**
 * Compact element to represent a text
 */
export declare const Label: ({ text, color: colorProp, variant, textTransform, sx, }: LabelProps) => import("react/jsx-runtime").JSX.Element;
