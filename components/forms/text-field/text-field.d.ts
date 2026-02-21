import { ChangeEvent, InputHTMLAttributes, ReactNode } from '../../../../node_modules/react';
/**
 * Supported field sizes for TextField.
 */
export type TextFieldSize = "small" | "medium";
/**
 * Props for input-specific composition.
 */
export interface TextFieldInputProps {
    /**
     * Content rendered at the end of the input.
     */
    endAdornment?: ReactNode;
}
/**
 * Props for the TextField component.
 */
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    /**
     * Label shown above the input.
     */
    label?: string;
    /**
     * Helper text rendered below the input.
     */
    helperText?: ReactNode;
    /**
     * Error text rendered below the input.
     */
    error?: ReactNode;
    /**
     * Shows a spinner inside the field.
     * @default false
     */
    loading?: boolean;
    /**
     * Input size variant.
     * @default "medium"
     */
    size?: TextFieldSize;
    /**
     * Makes the field span the container width.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Optional accent color used for border and text.
     */
    hexColor?: string;
    /**
     * Additional props for the input content area.
     */
    InputProps?: TextFieldInputProps;
    /**
     * Called when the input value changes.
     * @param e - Native input change event.
     * @param value - Trimmed input value.
     */
    onChangeValue?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}
/**
 * Text input with loading state.
 */
export declare function TextField({ id, label, helperText, error, loading, size, fullWidth, className, hexColor, InputProps, onChange, onChangeValue, disabled, ...props }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export default TextField;
