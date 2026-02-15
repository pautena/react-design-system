import { BootstrapDialogDialogProps } from '../Dialog/Dialog.types';
type OmitBaseDialogProps = "cancelable" | "acceptable" | "onAccept" | "onCancel" | "onClose" | "actions" | "callCloseWhenCancel" | "component" | "acceptType";
/**
 * Props for the ConfirmDialog component
 */
export interface ConfirmDialogProps extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
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
     * Callback function to handle cancel action.
     */
    onCancel: () => void;
    /**
     * Callback function to handle confirm action.
     */
    onConfirm: () => void;
}
/**
 * ConfirmDialog component renders a dialog to ask a user to confirm an action
 * with customizable title, confirmation and cancellation actions.
 * It optionally requires a passphrase to enable the confirmation action.
 */
export declare function ConfirmDialog({ open, title, loading, disabled, confirmText, cancelText, passphrase, children, onConfirm, onCancel, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export default ConfirmDialog;
