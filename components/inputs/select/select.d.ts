import { ChangeEvent, ReactNode, SelectHTMLAttributes } from '../../../../node_modules/react';
/**
 * Supported field sizes for Select.
 */
export type SelectSize = "small" | "medium";
/**
 * Option model accepted by Select.
 */
export interface SelectOption {
    /**
     * Visual label shown in the list.
     */
    label: string;
    /**
     * Submitted value.
     */
    value: string;
}
/**
 * Props for the Select component.
 */
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "color"> {
    /**
     * Label shown above the select.
     */
    label: string;
    /**
     * Selected value.
     */
    value: string;
    /**
     * Select options for native rendering.
     */
    options?: SelectOption[];
    /**
     * Helper text rendered below the select.
     */
    helperText?: ReactNode;
    /**
     * Error text rendered below the select.
     */
    error?: ReactNode;
    /**
     * Shows a spinner while value is loading.
     * @default false
     */
    loading?: boolean;
    /**
     * Shows a progress state while options are being fetched.
     * @default false
     */
    fetching?: boolean;
    /**
     * Input size variant.
     * @default "medium"
     */
    size?: SelectSize;
    /**
     * Makes the select span the container width.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Optional accent color used for border and text.
     */
    color?: string;
    /**
     * Optional option children for compatibility.
     */
    children?: ReactNode;
    /**
     * Called when the select value changes.
     * @param e - Native select change event.
     * @param value - Trimmed selected value.
     */
    onChangeValue?: (e: ChangeEvent<HTMLSelectElement>, value: string) => void;
}
/**
 * Native select wrapper with loading and fetching states.
 */
export declare function Select({ id, label, value, options, helperText, error, loading, fetching, size, fullWidth, className, color, children, onChange, onChangeValue, disabled, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
