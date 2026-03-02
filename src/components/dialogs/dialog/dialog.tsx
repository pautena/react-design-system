import type { ReactNode } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

const sizeClasses: Record<DialogSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
};

/**
 * Base dialog wrapper for consumer-facing usage.
 */
export function Dialog({
  open,
  title,
  description,
  children,
  footer,
  size = "md",
  showCloseButton = true,
  onClose,
  className,
}: DialogProps) {
  return (
    <DialogRoot
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn(sizeClasses[size], className)}
      >
        {title || description ? (
          <DialogHeader>
            {title ? <DialogTitle>{title}</DialogTitle> : null}
            {description ? (
              <DialogDescription>{description}</DialogDescription>
            ) : null}
          </DialogHeader>
        ) : null}

        {children}

        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </DialogRoot>
  );
}
