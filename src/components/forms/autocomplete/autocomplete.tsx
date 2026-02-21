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
   * Temporarily hides options while fetching.
   * @default false
   */
  fetching?: boolean;
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
  size = "medium",
  color,
  loading = false,
  fetching = false,
  className,
  disabled,
  onChangeValue,
  getOptionLabel,
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
    if (fetching) {
      return [] as T[];
    }

    const query = inputValue.toLowerCase();
    return options.filter((option) =>
      optionLabel(option).toLowerCase().includes(query),
    );
  }, [fetching, inputValue, options]);

  const inputId = id ?? `${label}-autocomplete`;

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
    <div className={cn("space-y-1", className)}>
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${inputId}-listbox`}
          aria-autocomplete="list"
          aria-busy={loading || fetching}
          value={inputValue}
          disabled={disabled || fetching}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setInputValue(event.target.value);
            setOpen(true);
            onChangeValue?.(event, event.target.value.trim());
          }}
          className={cn(
            "w-full rounded-md border border-input bg-background pr-9 text-sm outline-none",
            size === "small" ? "h-9 px-2" : "h-10 px-3",
            (disabled || fetching) && "opacity-70",
          )}
          style={color ? { borderColor: color, color } : undefined}
          {...props}
        />

        {(loading || fetching) && (
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

      {helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}

export default Autocomplete;
