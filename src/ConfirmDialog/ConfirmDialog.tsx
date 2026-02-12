import TextField from "@mui/material/TextField";
import { useState } from "react";
import BootstrapDialog from "../BootstrapDialog";
import type { BootstrapDialogDialogProps } from "../Dialog/Dialog.types";

type OmitBaseDialogProps =
  | "cancelable"
  | "acceptable"
  | "onAccept"
  | "onCancel"
  | "onClose"
  | "actions"
  | "callCloseWhenCancel"
  | "component"
  | "acceptType";

export interface ConfirmDialogProps
  extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
  /**
   * Text to display on the confirm button.
   */
  confirmText?: string;
  /**
   * Text to display on the cancel button.
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
export default function ConfirmDialog({
  open,
  title,
  loading,
  disabled,
  confirmText = "Confirm",
  cancelText = "Cancel",
  passphrase,
  children,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const [inputPassphrase, setInputPassphrase] = useState("");
  const validPassphrase = !passphrase || inputPassphrase === passphrase;

  return (
    <BootstrapDialog
      title={title}
      loading={loading}
      disabled={loading || disabled}
      disableAccept={!validPassphrase}
      open={open}
      onClose={onCancel}
      acceptable
      cancelable
      callCloseWhenCancel={false}
      acceptText={confirmText}
      cancelText={cancelText}
      onCancel={onCancel}
      onAccept={onConfirm}
    >
      {children}
      {passphrase && (
        <TextField
          size="small"
          fullWidth
          value={inputPassphrase}
          onChange={(e) => setInputPassphrase(e.target.value)}
          placeholder={passphrase}
        />
      )}
    </BootstrapDialog>
  );
}
