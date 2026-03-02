import { Loader2 } from "lucide-react";
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Supported field sizes for Autocomplete.
 */
export type AutocompleteSize = "small" | "medium";

/**
 * Props for the Autocomplete component.
 *
 * @template T - Option type.
 */
export interface AutocompleteProps<T>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange" | "value" | "defaultValue"
  > {
  /**
   * Label shown above the combobox.
   */
  label: string;
  /**
   * Available options.
   */
  options: T[];
  /**
   * Current selected option.
   */
  value?: T;
  /**
   * Helper text rendered below the field.
   */
  helperText?: ReactNode;
  /**
   * Error text rendered below the field.
   */
  error?: ReactNode;
  /**
   * Input size variant.
   * @default "medium"
   */
  size?: AutocompleteSize;
  /**
   * Optional accent color used for border and text.
   */
  color?: string;
  /**
   * Shows a spinner while options are loading.
   * @default false
   */
  loading?: boolean;
  /**
   * Called when user selects a value.
   * @param e - Input or option interaction event.
   * @param value - Trimmed selected value label.
   */
  onChangeValue?: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
    value: string,
  ) => void;
  /**
   * Converts options into labels.
   */
  getOptionLabel?: (option: T) => string;
}

/**
 * Searchable combobox with local option filtering.
 *
 * @template T - Option type.
 */
export function Autocomplete<T>({
  id,
  label,
  options,
  value,
  helperText,
  error,
  size = "medium",
  color,
  loading = false,
  className,
  disabled,
  onChangeValue,
  getOptionLabel,
  "aria-invalid": ariaInvalid,
  ...props
}: AutocompleteProps<T>) {
  const optionLabel = (option: T) => getOptionLabel?.(option) ?? String(option);

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ? optionLabel(value) : "");

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(optionLabel(value));
    }
  }, [value]);

  const renderedOptions = useMemo(() => {
    const query = inputValue.toLowerCase();
    return options.filter((option) =>
      optionLabel(option).toLowerCase().includes(query),
    );
  }, [inputValue, options]);

  const inputId = id ?? `${label}-autocomplete`;
  const hasError = Boolean(error);

  const handleSelect = (e: MouseEvent<HTMLButtonElement>, option: T) => {
    const nextValue = optionLabel(option);
    setInputValue(nextValue);
    setOpen(false);
    onChangeValue?.(e, nextValue.trim());
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Field
      data-invalid={hasError || undefined}
      className={cn("gap-1.5", className)}
    >
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

      <div className="relative">
        <Input
          id={inputId}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${inputId}-listbox`}
          aria-autocomplete="list"
          aria-busy={loading}
          aria-invalid={ariaInvalid || hasError || undefined}
          value={inputValue}
          disabled={disabled}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setInputValue(event.target.value);
            setOpen(true);
            onChangeValue?.(event, event.target.value.trim());
          }}
          className={cn(
            "w-full text-sm pr-9",
            size === "small" ? "h-9 px-2" : "h-10 px-3",
            hasError && "border-destructive",
            disabled && "opacity-70",
          )}
          style={color ? { borderColor: color, color } : undefined}
          {...props}
        />

        {loading && (
          <Loader2
            role="progressbar"
            aria-label="loading"
            className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin"
          />
        )}

        {open && renderedOptions.length > 0 ? (
          <div
            id={`${inputId}-listbox`}
            role="listbox"
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-md"
          >
            {renderedOptions.map((option, index) => {
              const labelValue = optionLabel(option);

              return (
                <button
                  type="button"
                  key={`${labelValue}-${index}`}
                  role="option"
                  aria-selected={labelValue === inputValue}
                  className="block w-full cursor-pointer rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                  onClick={(e) => handleSelect(e, option)}
                >
                  {labelValue}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {helperText && !hasError ? (
        <FieldDescription>{helperText}</FieldDescription>
      ) : null}

      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}
