import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { ReactNode } from '../../node_modules/react';
export type SelectSize = "small" | "medium";
export interface SelectProps<T> {
    /**
     * The label for the select input.
     */
    label: string;
    /**
     * The selected value.
     */
    value: T;
    /**
     * If true, the select input is in a loading state.
     */
    loading?: boolean;
    /**
     * If true, the select input is in a fetching state.
     */
    fetching?: boolean;
    /**
     * The size of the select input.
     */
    size?: SelectSize;
    /**
     * The color of the select input.
     */
    color?: string;
    /**
     * If true, the select input takes up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * The child elements to be rendered within the select input.
     */
    children?: ReactNode;
    /**
     * The callback function to handle changes to the select input.
     */
    onChange?: MuiSelectProps<T>["onChange"];
}
export interface SelectProps<T> {
    label: string;
    value: T;
    loading?: boolean;
    fetching?: boolean;
    size?: SelectSize;
    color?: string;
    fullWidth?: boolean;
    children?: ReactNode;
    onChange?: MuiSelectProps<T>["onChange"];
}
/**
 * A custom Select component that extends the functionality of the Material-UI Select component.
 * This component supports additional features such as loading and fetching states, custom colors, and full-width display.
 */
export declare const Select: <T extends ReactNode>({ label, value, loading, fetching, size, fullWidth, color, children, onChange, }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
