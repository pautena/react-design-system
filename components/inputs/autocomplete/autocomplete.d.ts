import { ChangeEvent, InputHTMLAttributes, MouseEvent, ReactNode } from '../../../../node_modules/react';
/**
 * Supported field sizes for Autocomplete.
 */
export type AutocompleteSize = "small" | "medium";
/**
 * Props for the Autocomplete component.
 *
 * @template T - Option type.
 */
export interface AutocompleteProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange" | "value" | "defaultValue"> {
    /**
     * Label shown above the combobox.
     */
    label: string;
    /**
     * Available options.
     */
    options: T[];
    /**
     * Current selected option.
     */
    value?: T;
    /**
     * Helper text rendered below the field.
     */
    helperText?: ReactNode;
    /**
     * Error text rendered below the field.
     */
    error?: ReactNode;
    /**
     * Input size variant.
     * @default "medium"
     */
    size?: AutocompleteSize;
    /**
     * Optional accent color used for border and text.
     */
    color?: string;
    /**
     * Shows a spinner while options are loading.
     * @default false
     */
    loading?: boolean;
    /**
     * Called when user selects a value.
     * @param e - Input or option interaction event.
     * @param value - Trimmed selected value label.
     */
    onChangeValue?: (e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>, value: string) => void;
    /**
     * Converts options into labels.
     */
    getOptionLabel?: (option: T) => string;
}
/**
 * Searchable combobox with local option filtering.
 *
 * @template T - Option type.
 */
export declare function Autocomplete<T>({ id, label, options, value, helperText, error, size, color, loading, className, disabled, onChangeValue, getOptionLabel, "aria-invalid": ariaInvalid, ...props }: AutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
