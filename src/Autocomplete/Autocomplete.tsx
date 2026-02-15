import MuiAutocomplete, {
  type AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import type { ChipTypeMap } from "@mui/material/Chip";
import type { TextFieldProps } from "@mui/material/TextField";
import type React from "react";
import type { JSXElementConstructor } from "react";
import TextField from "../TextField";

/**
 * Interface representing the slots for the Autocomplete component.
 */
export interface AutocompleteSlots {
  /**
   * Root autocomplete component
   */
  autocomplete?: JSXElementConstructor<
    MuiAutocompleteProps<any, any, any, any>
  >;
  /**
   * Text field component for input rendering
   */
  textField?: JSXElementConstructor<TextFieldProps>;
}

/**
 * Interface representing the slot properties for the Autocomplete component.
 */
export interface AutocompleteSlotProps {
  /**
   * Props for the autocomplete component (onChange is managed by the component)
   */
  autocomplete?: Partial<
    Omit<MuiAutocompleteProps<any, any, any, any>, "onChange" | "renderInput">
  >;
  /**
   * Props for the text field
   */
  textField?: Partial<TextFieldProps>;
}

/**
 * Props for the Autocomplete component.
 *
 * @template T - The type of the options
 * @template Multiple - Whether multiple selection is enabled
 * @template DisableClearable - Whether the clear button is disabled
 * @template FreeSolo - Whether free solo input is allowed
 * @template ChipComponent - The component type for chips (when multiple selection is enabled)
 */
export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    MuiAutocompleteProps<
      T,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    "renderInput" | "onChange" | "color" | "slots" | "slotProps"
  > {
  /**
   * The label for the autocomplete input.
   */
  label: string;
  /**
   * Optional helper text to display below the input.
   */
  helperText?: string;
  /**
   * Optional color for the autocomplete component.
   */
  color?: string;
  /**
   * If `true`, indicates that data is being fetched.
   */
  fetching?: boolean;
  /**
   * Optional callback function that is called when the value changes.
   */
  onChangeValue?: (value: T) => void;
  /**
   * Optional slots for custom rendering
   */
  slots?: AutocompleteSlots;
  /**
   * Optional props for the slots
   */
  slotProps?: AutocompleteSlotProps;
}

/**
 * Autocomplete component that wraps the MUI Autocomplete component with additional props.
 *
 * Supports extensive customization through slots and slotProps.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Autocomplete
 *   label="Country"
 *   options={countries}
 *   onChangeValue={handleChange}
 * />
 *
 * // With slot customization
 * <Autocomplete
 *   label="Country"
 *   options={countries}
 *   slots={{
 *     textField: CustomTextField
 *   }}
 *   slotProps={{
 *     autocomplete: { size: "small" },
 *     textField: { variant: "filled" }
 *   }}
 * />
 * ```
 */
export function Autocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(
  props: AutocompleteProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
) {
  const {
    label,
    loading,
    fetching,
    options,
    helperText,
    color,
    onChangeValue = () => null,
    sx,
    slots,
    slotProps,
    ...rest
  } = props;
  const loadingOrFetching = loading || fetching;

  // Slot components with defaults
  const AutocompleteComponent = slots?.autocomplete ?? MuiAutocomplete;
  const TextFieldComponent = slots?.textField ?? TextField;

  return (
    <AutocompleteComponent
      {...slotProps?.autocomplete}
      loading={loadingOrFetching}
      options={fetching ? [] : options}
      onChange={(_, value) => onChangeValue(value as T) as any}
      {...(rest as any)}
      renderInput={(params) => (
        <TextFieldComponent
          {...(params as any)}
          label={label}
          fullWidth
          fetching={fetching}
          loading={loading}
          hexColor={color}
          helperText={helperText}
          {...slotProps?.textField}
        />
      )}
      sx={sx}
    />
  );
}

export default Autocomplete;
