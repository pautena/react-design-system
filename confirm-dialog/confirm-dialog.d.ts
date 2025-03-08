import { BootstrapDialogDialogProps } from '../dialog/dialog.types';
type OmitBaseDialogProps = "cancelable" | "acceptable" | "onAccept" | "onCancel" | "onClose" | "actions" | "callCloseWhenCancel" | "component" | "acceptType";
export interface ConfirmDialogProps extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
    confirmText?: string;
    canceText?: string;
    passphrase?: string;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare const ConfirmDialog: ({ open, title, loading, disabled, confirmText, cancelText, passphrase, children, onConfirm, onCancel, }: ConfirmDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
