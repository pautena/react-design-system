import { Loader2, X } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import TextField from "@/components/forms/text-field";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

/**
 * Props for the ConfirmDialog component.
 */
export interface ConfirmDialogProps {
  /**
   * Whether the dialog is open.
   */
  open: boolean;
  /**
   * Dialog title.
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
   * Text to display on the confirm button.
   * @default "Confirm"
   */
  confirmText?: string;
  /**
   * Text to display on the cancel button.
   * @default "Cancel"
   */
  cancelText?: string;
  /**
   * Optional passphrase for additional confirmation.
   */
  passphrase?: string;
  /**
   * Optional content rendered inside the dialog.
   */
  children?: ReactNode;
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
 * Confirm dialog for destructive or critical actions.
 */
export function ConfirmDialog({
  open,
  title,
  loading = false,
  disabled = false,
  confirmText = "Confirm",
  cancelText = "Cancel",
  passphrase,
  children,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const [inputPassphrase, setInputPassphrase] = useState("");
  const validPassphrase = !passphrase || inputPassphrase === passphrase;
  const closeDisabled = loading;
  const cancelDisabled = loading;
  const confirmDisabled = disabled || loading || !validPassphrase;

  return (
    <AlertDialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onCancel();
        }
      }}
    >
      <AlertDialogContent className="sm:max-w-md">
        <div className="absolute right-4 top-4">
          <AlertDialogCancel
            variant="ghost"
            size="icon-sm"
            aria-label="close"
            disabled={closeDisabled}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {children ? (
            <AlertDialogDescription>{children}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>

        {passphrase ? (
          <TextField
            label="Passphrase"
            placeholder={passphrase}
            value={inputPassphrase}
            onChange={(event) => setInputPassphrase(event.target.value)}
            fullWidth
            size="small"
          />
        ) : null}

        <AlertDialogFooter>
          <AlertDialogCancel disabled={cancelDisabled}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={confirmDisabled}>
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2
                  role="progressbar"
                  aria-label="loading"
                  className="h-4 w-4 animate-spin"
                />
                {confirmText}
              </span>
            ) : (
              confirmText
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmDialog;
