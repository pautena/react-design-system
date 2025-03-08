import { BootstrapDialogDialogProps } from '../dialog';
type OmitBaseDialogProps = "cancelable" | "acceptable" | "onAccept" | "onCancel" | "onClose" | "actions" | "callCloseWhenCancel" | "component" | "acceptType";
export interface FormDialogProps<T> extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
    submitText?: string;
    canceText?: string;
    onCancel: () => void;
    onSubmit: (data: T) => void;
}
export declare const FormDialog: <T>({ open, title, loading, disabled, submitText, cancelText, children, onSubmit, onCancel, }: FormDialogProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
