import { ReactNode } from '../../../../node_modules/react';
/**
 * Props for the ConfirmDialog component.
 */
export interface ConfirmDialogProps {
    /**
     * Whether the dialog is open.
     */
    open: boolean;
    /**
     * Dialog title.
     */
    title: string;
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
     * Text to display on the confirm button.
     * @default "Confirm"
     */
    confirmText?: string;
    /**
     * Text to display on the cancel button.
     * @default "Cancel"
     */
    cancelText?: string;
    /**
     * Optional passphrase for additional confirmation.
     */
    passphrase?: string;
    /**
     * Optional content rendered inside the dialog.
     */
    children?: ReactNode;
    /**
     * Callback function to handle cancel action.
     */
    onCancel: () => void;
    /**
     * Callback function to handle confirm action.
     */
    onConfirm: () => void;
}
/**
 * Confirm dialog for destructive or critical actions.
 */
export declare function ConfirmDialog({ open, title, loading, disabled, confirmText, cancelText, passphrase, children, onConfirm, onCancel, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
