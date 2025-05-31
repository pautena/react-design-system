import type { ReactNode } from "react";

export interface DialogAction {
  id: string;
  text: string;
  type?: "button" | "submit";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onClick?: () => void;
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
};
