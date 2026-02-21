import { Loader2 } from "lucide-react";
import type {
  ChangeEvent,
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

/**
 * Supported field sizes for Select.
 */
export type SelectSize = "small" | "medium";

/**
 * Option model accepted by Select.
 */
export interface SelectOption {
  /**
   * Visual label shown in the list.
   */
  label: string;
  /**
   * Submitted value.
   */
  value: string;
}

/**
 * Props for the Select component.
 */
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "color"> {
  /**
   * Label shown above the select.
   */
  label: string;
  /**
   * Selected value.
   */
  value: string;
  /**
   * Select options for native rendering.
   */
  options?: SelectOption[];
  /**
   * Helper text rendered below the select.
   */
  helperText?: ReactNode;
  /**
   * Error text rendered below the select.
   */
  error?: ReactNode;
  /**
   * Shows a spinner while value is loading.
   * @default false
   */
  loading?: boolean;
  /**
   * Shows a progress state while options are being fetched.
   * @default false
   */
  fetching?: boolean;
  /**
   * Input size variant.
   * @default "medium"
   */
  size?: SelectSize;
  /**
   * Makes the select span the container width.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Optional accent color used for border and text.
   */
  color?: string;
  /**
   * Optional option children for compatibility.
   */
  children?: ReactNode;
  /**
   * Called when the select value changes.
   * @param e - Native select change event.
   * @param value - Trimmed selected value.
   */
  onChangeValue?: (e: ChangeEvent<HTMLSelectElement>, value: string) => void;
}

const fromChildren = (children: ReactNode): SelectOption[] => {
  const asArray = Array.isArray(children) ? children : [children];

  return asArray
    .filter(Boolean)
    .map(
      (child) =>
        child as ReactElement<{ value?: string; children?: ReactNode }>,
    )
    .filter((child) => typeof child?.props?.value === "string")
    .map((child) => ({
      value: child.props.value as string,
      label: String(child.props.children ?? child.props.value),
    }));
};

/**
 * Native select wrapper with loading and fetching states.
 */
export function Select({
  id,
  label,
  value,
  options,
  helperText,
  error,
  loading = false,
  fetching = false,
  size = "medium",
  fullWidth = false,
  className,
  color,
  children,
  onChange,
  onChangeValue,
  disabled,
  ...props
}: SelectProps) {
  const selectId = id ?? `${label}-select`;
  const allOptions = options ?? fromChildren(children);
  const activeValue = fetching ? "" : value;
  const hasError = Boolean(error);

  return (
    <Field
      data-invalid={hasError || undefined}
      className={cn(fullWidth && "w-full", className)}
    >
      <FieldLabel htmlFor={selectId}>{label}</FieldLabel>

      <div className="relative">
        <select
          id={selectId}
          value={activeValue}
          disabled={disabled || fetching}
          aria-busy={loading || fetching}
          className={cn(
            "w-full rounded-md border border-input bg-background pr-9 text-sm outline-none aria-invalid:border-destructive",
            size === "small" ? "h-9 px-2" : "h-10 px-3",
            (disabled || fetching) && "opacity-70",
          )}
          aria-invalid={hasError || undefined}
          onChange={(e) => {
            onChange?.(e);
            onChangeValue?.(e, e.target.value.trim());
          }}
          style={color ? { borderColor: color, color } : undefined}
          {...props}
        >
          {fetching ? <option value="">Loading options...</option> : null}
          {!fetching
            ? allOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : null}
        </select>

        {(loading || fetching) && (
          <Loader2
            role="progressbar"
            aria-label="loading"
            className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin"
          />
        )}
      </div>

      {helperText ? <FieldDescription>{helperText}</FieldDescription> : null}

      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}

export default Select;
