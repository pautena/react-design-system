import React, { useState } from "react";
import { BootstrapDialog } from "../bootstrap-dialog";
import { BootstrapDialogDialogProps } from "../dialog/dialog.types";
import { TextField } from "@mui/material";

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
export interface ConfirmDialogProps extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
  confirmText?: string;
  canceText?: string;
  passphrase?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmDialog = ({
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
}: ConfirmDialogProps) => {
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
};
