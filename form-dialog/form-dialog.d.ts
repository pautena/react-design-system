import { BootstrapDialogDialogProps } from '../dialog';
type OmitBaseDialogProps = "cancelable" | "acceptable" | "onAccept" | "onCancel" | "onClose" | "actions" | "callCloseWhenCancel" | "component" | "acceptType";
/**
 * Props for the FormDialog component.
 */
export interface FormDialogProps<T> extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
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
 * A generic form dialog component that wraps a BootstrapDialog and handles form submission.
 * Put your form inside and receive the data validated using the input name field.
 */
export declare const FormDialog: <T>({ open, title, loading, disabled, submitText, cancelText, children, onSubmit, onCancel, }: FormDialogProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
