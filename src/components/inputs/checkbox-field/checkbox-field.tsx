import type { ComponentProps, ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

/**
 * Props for the CheckboxField component.
 */
export interface CheckboxFieldProps
  extends Omit<ComponentProps<typeof Checkbox>, "id" | "className"> {
  /**
   * Label shown next to the checkbox.
   */
  label: string;
  /**
   * Helper text rendered below the control.
   */
  helperText?: ReactNode;
  /**
   * Error text rendered below the control.
   */
  error?: ReactNode;
  /**
   * Makes the field span the container width.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Field id used to connect label and checkbox.
   */
  id?: string;
  /**
   * Additional CSS classes for the field wrapper.
   */
  className?: string;
}

/**
 * Checkbox form wrapper with helper and error states.
 */
export function CheckboxField({
  id,
  label,
  helperText,
  error,
  fullWidth = false,
  className,
  disabled,
  ...props
}: CheckboxFieldProps) {
  const inputId = id ?? `${label}-checkbox`;
  const hasError = Boolean(error);

  return (
    <Field
      orientation="horizontal"
      data-disabled={disabled || undefined}
      data-invalid={hasError || undefined}
      className={cn(fullWidth && "w-full", className)}
    >
      <Checkbox
        id={inputId}
        disabled={disabled}
        aria-label={label}
        aria-invalid={hasError || undefined}
        {...props}
      />

      <FieldContent>
        <FieldLabel htmlFor={inputId} className="font-normal">
          {label}
        </FieldLabel>

        {helperText && !hasError ? (
          <FieldDescription>{helperText}</FieldDescription>
        ) : null}

        {error ? <FieldError>{error}</FieldError> : null}
      </FieldContent>
    </Field>
  );
}
