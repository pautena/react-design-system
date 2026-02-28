import { ReactNode } from '../../../node_modules/react';
/**
 * Supported sizes for dialog content.
 */
export type DialogSize = "sm" | "md" | "lg";
/**
 * Props for the Dialog component.
 */
export interface DialogProps {
    /**
     * Whether the dialog is open.
     */
    open: boolean;
    /**
     * Dialog title.
     */
    title?: ReactNode;
    /**
     * Optional description text rendered under the title.
     */
    description?: ReactNode;
    /**
     * Dialog body content.
     */
    children?: ReactNode;
    /**
     * Optional footer content rendered at the bottom.
     */
    footer?: ReactNode;
    /**
     * Size variant for the dialog content.
     * @default "md"
     */
    size?: DialogSize;
    /**
     * Shows the close button in the dialog content.
     * @default true
     */
    showCloseButton?: boolean;
    /**
     * Callback fired when the dialog requests to close.
     */
    onClose: () => void;
    /**
     * Additional class names for the dialog content.
     */
    className?: string;
}
/**
 * Base dialog wrapper for consumer-facing usage.
 */
export declare function Dialog({ open, title, description, children, footer, size, showCloseButton, onClose, className, }: DialogProps): import("react/jsx-runtime").JSX.Element;
export default Dialog;
