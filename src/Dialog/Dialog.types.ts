import type {
  BoxProps,
  ButtonProps,
  CircularProgressProps,
  DialogActionsProps,
  DialogContentProps,
  DialogProps,
  DialogTitleProps,
  IconButtonProps,
} from "@mui/material";
import type { JSXElementConstructor, ReactNode } from "react";

/**
 * Action button configuration for dialogs
 */
export interface DialogAction {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Button text label
   */
  text: string;
  /**
   * Button type attribute
   * @default "button"
   */
  type?: "button" | "submit";
  /**
   * Button color theme
   * @default "primary"
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  /**
   * Click handler function
   */
  onClick?: () => void;
}

/**
 * Interface representing the slots for the BootstrapDialog component.
 */
export interface BootstrapDialogSlots {
  /**
   * Root dialog component
   */
  dialog?: JSXElementConstructor<DialogProps>;
  /**
   * Dialog title component
   */
  dialogTitle?: JSXElementConstructor<DialogTitleProps>;
  /**
   * Title container component
   */
  titleContainer?: JSXElementConstructor<BoxProps>;
  /**
   * Loading indicator component
   */
  loadingIndicator?: JSXElementConstructor<CircularProgressProps>;
  /**
   * Close button component
   */
  closeButton?: JSXElementConstructor<IconButtonProps>;
  /**
   * Close icon component
   */
  closeIcon?: JSXElementConstructor<any>;
  /**
   * Content wrapper component
   */
  contentWrapper?: JSXElementConstructor<BoxProps>;
  /**
   * Dialog content component
   */
  dialogContent?: JSXElementConstructor<DialogContentProps>;
  /**
   * Dialog actions component
   */
  dialogActions?: JSXElementConstructor<DialogActionsProps>;
  /**
   * Action button component
   */
  actionButton?: JSXElementConstructor<ButtonProps>;
  /**
   * Cancel button component
   */
  cancelButton?: JSXElementConstructor<ButtonProps>;
  /**
   * Accept button component
   */
  acceptButton?: JSXElementConstructor<ButtonProps>;
}

/**
 * Interface representing the slot properties for the BootstrapDialog component.
 */
export interface BootstrapDialogSlotProps {
  /**
   * Props for the root dialog
   */
  dialog?: Partial<DialogProps>;
  /**
   * Props for the dialog title
   */
  dialogTitle?: Partial<DialogTitleProps>;
  /**
   * Props for the title container
   */
  titleContainer?: Partial<BoxProps>;
  /**
   * Props for the loading indicator
   */
  loadingIndicator?: Partial<CircularProgressProps>;
  /**
   * Props for the close button
   */
  closeButton?: Partial<IconButtonProps>;
  /**
   * Props for the content wrapper
   */
  contentWrapper?: Partial<BoxProps>;
  /**
   * Props for the dialog content
   */
  dialogContent?: Partial<DialogContentProps>;
  /**
   * Props for the dialog actions
   */
  dialogActions?: Partial<DialogActionsProps>;
  /**
   * Props for action buttons
   */
  actionButton?: Partial<ButtonProps>;
  /**
   * Props for the cancel button
   */
  cancelButton?: Partial<ButtonProps>;
  /**
   * Props for the accept button
   */
  acceptButton?: Partial<ButtonProps>;
}

/**
 * Props for the BootstrapDialog component.
 */
export type BootstrapDialogDialogProps = {
  /**
   * Whether the dialog is open.
   */
  open: boolean;

  /**
   * The title of the dialog.
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
   * Whether the accept button is disabled.
   * @default false
   */
  disableAccept?: boolean;

  /**
   * Whether the cancel button is disabled.
   * @default false
   */
  disableCancel?: boolean;

  /**
   * Whether the dialog is cancelable.
   * @default true
   */
  cancelable?: boolean;

  /**
   * Whether the dialog is acceptable.
   * @default true
   */
  acceptable?: boolean;

  /**
   * Whether to call the onClose function when the cancel button is clicked.
   * @default true
   */
  callCloseWhenCancel?: boolean;

  /**
   * Actions to be displayed in the dialog.
   */
  actions?: DialogAction[];

  /**
   * Text for the cancel button.
   * @default "Cancel"
   */
  cancelText?: string;

  /**
   * Text for the accept button.
   * @default "Accept"
   */
  acceptText?: string;

  /**
   * Type of the accept button.
   * @default "button"
   */
  acceptType?: "button" | "submit";

  /**
   * Function to call when the dialog is closed.
   */
  onClose: () => void;

  /**
   * Function to call when the cancel button is clicked.
   */
  onCancel?: () => void;

  /**
   * Function to call when the accept button is clicked.
   */
  onAccept?: () => void;

  /**
   * Component to be rendered inside the dialog.
   */
  component?: React.ElementType;

  /**
   * Props to be passed to the component.
   */
  componentProps?: any;

  /**
   * Children to be rendered inside the dialog.
   */
  children?: ReactNode | undefined;
  /**
   * Optional slots for custom rendering within the dialog
   */
  slots?: BootstrapDialogSlots;
  /**
   * Optional props for the slots
   */
  slotProps?: BootstrapDialogSlotProps;
};
