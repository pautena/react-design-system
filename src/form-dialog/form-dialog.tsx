import type { FormEvent } from "react";
import { BootstrapDialog } from "../bootstrap-dialog";
import type { BootstrapDialogDialogProps } from "../dialog";
import { getFormData } from "../utils/forms";

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

/**
 * Props for the FormDialog component.
 */
export interface FormDialogProps<T>
  extends Omit<BootstrapDialogDialogProps, OmitBaseDialogProps> {
  /**
   * The text to display on the submit button.
   * @default "Submit"
   */
  submitText?: string;

  /**
   * The text to display on the cancel button.
   * @default "Cancel"
   */
  cancelText?: string;

  /**
   * Callback function to be called when the cancel button is clicked.
   */
  onCancel: () => void;

  /**
   * Callback function to be called when the submit button is clicked.
   * @param data - The data to be submitted.
   */
  onSubmit: (data: T) => void;
}

/**
 * A generic form dialog component that wraps a BootstrapDialog and handles form submission.
 * Put your form inside and receive the data validated using the input name field.
 */
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

    onSubmit(getFormData<T>(e));
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
