import { BootstrapDialog } from "../bootstrap-dialog";
import { FormEvent } from "react";
import React from "react";
import { BootstrapDialogDialogProps } from "../dialog.types";

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
export interface FormDialogProps<T> extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
  submitText?: string;
  canceText?: string;
  onCancel: () => void;
  onSubmit: (data: T) => void;
}

export const FormDialog = <T,>({
  open,
  title,
  loading,
  disabled,
  submitText = "Submit",
  cancelText = "Cancel",
  children,
  onSubmit,
  onCancel,
}: FormDialogProps<T>) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const rawData: Record<string, any> = {};

    data.forEach((value, key) => {
      rawData[key] = value;
    });

    onSubmit(rawData as T);
  };

  return (
    <BootstrapDialog
      component="form"
      componentProps={{
        onSubmit: handleSubmit,
      }}
      title={title}
      loading={loading}
      disabled={loading || disabled}
      open={open}
      onClose={onCancel}
      callCloseWhenCancel={false}
      cancelable
      acceptable
      cancelText={cancelText}
      onCancel={onCancel}
      acceptText={submitText}
      acceptType="submit"
    >
      {children}
    </BootstrapDialog>
  );
};
