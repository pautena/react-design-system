import { ComponentProps, ReactNode } from '../../../../node_modules/react';
import { Checkbox } from '../../ui/checkbox';
/**
 * Props for the CheckboxField component.
 */
export interface CheckboxFieldProps extends Omit<ComponentProps<typeof Checkbox>, "id" | "className"> {
    /**
     * Label shown next to the checkbox.
     */
    label: string;
    /**
     * Helper text rendered below the control.
     */
    helperText?: ReactNode;
    /**
     * Error text rendered below the control.
     */
    error?: ReactNode;
    /**
     * Makes the field span the container width.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Field id used to connect label and checkbox.
     */
    id?: string;
    /**
     * Additional CSS classes for the field wrapper.
     */
    className?: string;
}
/**
 * Checkbox form wrapper with helper and error states.
 */
export declare function CheckboxField({ id, label, helperText, error, fullWidth, className, disabled, ...props }: CheckboxFieldProps): import("react/jsx-runtime").JSX.Element;
