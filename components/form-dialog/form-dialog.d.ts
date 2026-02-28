import { ReactNode } from '../../../node_modules/react';
import { DialogSize } from '../dialog';
/**
 * Props for the FormDialog component.
 *
 * @template T - The type of data returned from the form.
 */
export interface FormDialogProps<T> {
    /**
     * Whether the dialog is open.
     */
    open: boolean;
    /**
     * The title of the dialog.
     */
    title: ReactNode;
    /**
     * Optional description rendered under the title.
     */
    description?: ReactNode;
    /**
     * Whether the dialog is in a loading state.
     * @default false
     */
    loading?: boolean;
    /**
     * Whether the dialog is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the submit button is disabled.
     * @default false
     */
    disableAccept?: boolean;
    /**
     * Whether the cancel button is disabled.
     * @default false
     */
    disableCancel?: boolean;
    /**
     * The text to display on the submit button.
     * @default "Submit"
     */
    submitText?: string;
    /**
     * The text to display on the cancel button.
     * @default "Cancel"
     */
    cancelText?: string;
    /**
     * Size variant for the dialog content.
     * @default "md"
     */
    size?: DialogSize;
    /**
     * Additional class names for the dialog content.
     */
    className?: string;
    /**
     * Content rendered inside the form.
     */
    children?: ReactNode;
    /**
     * Callback function to be called when the cancel button is clicked.
     */
    onCancel: () => void;
    /**
     * Callback function to be called when the submit button is clicked.
     * @param data - The data to be submitted.
     */
    onSubmit: (data: T) => void;
}
/**
 * Form dialog wrapper with submit handling.
 */
export declare function FormDialog<T>({ open, title, description, loading, disabled, disableAccept, disableCancel, submitText, cancelText, size, className, children, onSubmit, onCancel, }: FormDialogProps<T>): import("react/jsx-runtime").JSX.Element;
export default FormDialog;
