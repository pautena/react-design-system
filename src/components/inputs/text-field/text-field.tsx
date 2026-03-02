import { Loader2 } from "lucide-react";
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Supported field sizes for TextField.
 */
export type TextFieldSize = "small" | "medium";

/**
 * Props for input-specific composition.
 */
export interface TextFieldInputProps {
  /**
   * Content rendered at the end of the input.
   */
  endAdornment?: ReactNode;
}

/**
 * Props for the TextField component.
 */
export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
  /**
   * Label shown above the input.
   */
  label?: string;
  /**
   * Helper text rendered below the input.
   */
  helperText?: ReactNode;
  /**
   * Error text rendered below the input.
   */
  error?: ReactNode;
  /**
   * Shows a spinner inside the field.
   * @default false
   */
  loading?: boolean;
  /**
   * Input size variant.
   * @default "medium"
   */
  size?: TextFieldSize;
  /**
   * Makes the field span the container width.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Optional accent color used for border and text.
   */
  hexColor?: string;
  /**
   * Additional props for the input content area.
   */
  InputProps?: TextFieldInputProps;
  /**
   * Called when the input value changes.
   * @param e - Native input change event.
   * @param value - Trimmed input value.
   */
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

/**
 * Text input with loading state.
 */
export function TextField({
  id,
  label,
  helperText,
  error,
  loading = false,
  size = "medium",
  fullWidth = false,
  className,
  hexColor,
  InputProps,
  onChange,
  onChangeValue,
  disabled,
  ...props
}: TextFieldProps) {
  const inputId = id ?? `${label ?? "textfield"}-input`;
  const hasError = Boolean(error);

  return (
    <Field
      data-invalid={hasError || undefined}
      className={cn("gap-1.5", fullWidth && "w-full", className)}
    >
      {label ? <FieldLabel htmlFor={inputId}>{label}</FieldLabel> : null}

      <div className="relative">
        <Input
          id={inputId}
          disabled={disabled}
          aria-busy={loading}
          aria-invalid={hasError || undefined}
          className={cn(
            "text-sm",
            size === "small" ? "h-9 px-2" : "h-10 px-3",
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
          <div className="absolute inset-y-0 right-3 flex items-center gap-2">
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
