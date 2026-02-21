import { ChangeEvent, ReactNode, TextareaHTMLAttributes } from '../../../../node_modules/react';
/**
 * Props for textarea-specific composition.
 */
export interface TextareaFieldInputProps {
    /**
     * Content rendered at the end of the textarea.
     */
    endAdornment?: ReactNode;
}
/**
 * Props for the TextareaField component.
 */
export interface TextareaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "color"> {
    /**
     * Label shown above the textarea.
     */
    label?: string;
    /**
     * Helper text rendered below the textarea.
     */
    helperText?: ReactNode;
    /**
     * Error text rendered below the textarea.
     */
    error?: ReactNode;
    /**
     * Shows a spinner inside the field.
     * @default false
     */
    loading?: boolean;
    /**
     * Makes the field span the container width.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Number of visible text rows.
     * @default 4
     */
    rowCount?: number;
    /**
     * Optional accent color used for border and text.
     */
    hexColor?: string;
    /**
     * Additional props for the textarea content area.
     */
    InputProps?: TextareaFieldInputProps;
    /**
     * Called when the textarea value changes.
     * @param e - Native textarea change event.
     * @param value - Trimmed textarea value.
     */
    onChangeValue?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
}
/**
 * Multiline text input with loading state.
 */
export declare function TextareaField({ id, label, helperText, error, loading, fullWidth, rowCount, className, hexColor, InputProps, onChange, onChangeValue, disabled, ...props }: TextareaFieldProps): import("react/jsx-runtime").JSX.Element;
export default TextareaField;
