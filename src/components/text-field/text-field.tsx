import { Loader2 } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
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
   * Shows a spinner inside the field.
   * @default false
   */
  loading?: boolean;
  /**
   * Shows a progress bar at the bottom of the field.
   * @default false
   */
  fetching?: boolean;
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
}

/**
 * Text input with loading and fetching states.
 */
export function TextField({
  id,
  label,
  helperText,
  loading = false,
  fetching = false,
  size = "medium",
  fullWidth = false,
  className,
  hexColor,
  InputProps,
  disabled,
  ...props
}: TextFieldProps) {
  const inputId = id ?? `${label ?? "textfield"}-input`;

  return (
    <div className={cn("space-y-1", fullWidth && "w-full", className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}

      <div className="relative">
        <div
          className={cn(
            "relative flex items-center rounded-md border border-input bg-transparent",
            size === "small" ? "h-9 px-2" : "h-10 px-3",
            (disabled || fetching) && "opacity-70",
          )}
          style={
            hexColor ? { borderColor: hexColor, color: hexColor } : undefined
          }
        >
          <input
            id={inputId}
            disabled={disabled || fetching}
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
            aria-busy={loading || fetching}
            {...props}
          />

          {InputProps?.endAdornment ? (
            <div className="ml-2 inline-flex items-center">
              {InputProps.endAdornment}
            </div>
          ) : null}

          {loading ? (
            <Loader2
              role="progressbar"
              aria-label="loading"
              className="ml-2 h-4 w-4 animate-spin"
            />
          ) : null}
        </div>

        {fetching && !loading ? (
          <div
            role="progressbar"
            aria-label="fetching"
            className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden rounded-b-md bg-muted"
          >
            <div className="h-full w-1/3 animate-pulse bg-foreground" />
          </div>
        ) : null}
      </div>

      {helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}

export default TextField;
