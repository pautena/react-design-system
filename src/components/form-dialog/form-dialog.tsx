import type { FormEvent, ReactNode } from "react";
import { useId } from "react";
import { Loader2, X } from "lucide-react";
import Button from "@/components/button";
import Dialog, { type DialogSize } from "@/components/dialog";
import { getFormData } from "@/utils/forms";

/**
 * Props for the FormDialog component.
 *
 * @template T - The type of data returned from the form.
 */
export interface FormDialogProps<T> {
  /**
   * Whether the dialog is open.
   */
  open: boolean;
  /**
   * The title of the dialog.
   */
  title: ReactNode;
  /**
   * Optional description rendered under the title.
   */
  description?: ReactNode;
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
   * Whether the submit button is disabled.
   * @default false
   */
  disableAccept?: boolean;
  /**
   * Whether the cancel button is disabled.
   * @default false
   */
  disableCancel?: boolean;
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
   * Size variant for the dialog content.
   * @default "md"
   */
  size?: DialogSize;
  /**
   * Additional class names for the dialog content.
   */
  className?: string;
  /**
   * Content rendered inside the form.
   */
  children?: ReactNode;
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
 * Form dialog wrapper with submit handling.
 */
export function FormDialog<T>({
  open,
  title,
  description,
  loading = false,
  disabled = false,
  disableAccept = false,
  disableCancel = false,
  submitText = "Submit",
  cancelText = "Cancel",
  size = "md",
  className,
  children,
  onSubmit,
  onCancel,
}: FormDialogProps<T>) {
  const formId = useId();
  const closeDisabled = disabled || loading;
  const cancelDisabled = disabled || loading;
  const acceptDisabled = disabled || loading;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(getFormData<T>(event));
  };

  const titleContent = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-2">
        <span>{title}</span>
        {loading ? (
          <Loader2
            role="progressbar"
            aria-label="loading"
            className="h-4 w-4 animate-spin text-muted-foreground"
          />
        ) : null}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="close"
        disabled={closeDisabled}
        onClick={onCancel}
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );

  const footer = (
    <>
      <Button
        type="button"
        variant="outline"
        disabled={cancelDisabled || disableCancel}
        onClick={onCancel}
      >
        {cancelText}
      </Button>
      <Button
        type="submit"
        form={formId}
        disabled={acceptDisabled || disableAccept}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {submitText}
          </span>
        ) : (
          submitText
        )}
      </Button>
    </>
  );

  return (
    <Dialog
      open={open}
      title={titleContent}
      description={description}
      size={size}
      className={className}
      showCloseButton={false}
      footer={footer}
      onClose={onCancel}
    >
      <form id={formId} onSubmit={handleSubmit} className="space-y-4">
        <fieldset disabled={loading || disabled} className="space-y-4">
          {children}
        </fieldset>
      </form>
    </Dialog>
  );
}

export default FormDialog;
