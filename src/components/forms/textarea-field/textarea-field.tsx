import { Loader2 } from "lucide-react";
import type { ChangeEvent, ReactNode, TextareaHTMLAttributes } from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/**
 * Props for textarea-specific composition.
 */
export interface TextareaFieldInputProps {
  /**
   * Content rendered at the end of the textarea.
   */
  endAdornment?: ReactNode;
}

/**
 * Props for the TextareaField component.
 */
export interface TextareaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "color"> {
  /**
   * Label shown above the textarea.
   */
  label?: string;
  /**
   * Helper text rendered below the textarea.
   */
  helperText?: ReactNode;
  /**
   * Error text rendered below the textarea.
   */
  error?: ReactNode;
  /**
   * Shows a spinner inside the field.
   * @default false
   */
  loading?: boolean;
  /**
   * Makes the field span the container width.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Number of visible text rows.
   * @default 4
   */
  rowCount?: number;
  /**
   * Optional accent color used for border and text.
   */
  hexColor?: string;
  /**
   * Additional props for the textarea content area.
   */
  InputProps?: TextareaFieldInputProps;
  /**
   * Called when the textarea value changes.
   * @param e - Native textarea change event.
   * @param value - Trimmed textarea value.
   */
  onChangeValue?: (e: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
}

/**
 * Multiline text input with loading state.
 */
export function TextareaField({
  id,
  label,
  helperText,
  error,
  loading = false,
  fullWidth = false,
  rowCount = 4,
  className,
  hexColor,
  InputProps,
  onChange,
  onChangeValue,
  disabled,
  ...props
}: TextareaFieldProps) {
  const inputId = id ?? `${label ?? "textareafield"}-textarea`;
  const hasError = Boolean(error);

  return (
    <Field
      data-invalid={hasError || undefined}
      className={cn("gap-1.5", fullWidth && "w-full", className)}
    >
      {label ? <FieldLabel htmlFor={inputId}>{label}</FieldLabel> : null}

      <div className="relative">
        <Textarea
          id={inputId}
          rows={rowCount}
          disabled={disabled}
          aria-busy={loading}
          aria-invalid={hasError || undefined}
          className={cn(
            "text-sm",
            "min-h-24 px-3 py-2",
            (InputProps?.endAdornment || loading) && "pr-10",
            disabled && "opacity-70",
          )}
          style={
            hexColor ? { borderColor: hexColor, color: hexColor } : undefined
          }
          onChange={(e) => {
            onChange?.(e);
            onChangeValue?.(e, e.target.value.trim());
          }}
          {...props}
        />

        {(InputProps?.endAdornment || loading) && (
          <div className="absolute right-3 top-3 flex items-center gap-2">
            {InputProps?.endAdornment ? (
              <div className="inline-flex items-center">
                {InputProps.endAdornment}
              </div>
            ) : null}

            {loading ? (
              <Loader2
                role="progressbar"
                aria-label="loading"
                className="h-4 w-4 animate-spin"
              />
            ) : null}
          </div>
        )}
      </div>

      {helperText && !hasError ? (
        <FieldDescription>{helperText}</FieldDescription>
      ) : null}

      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}

export default TextareaField;
