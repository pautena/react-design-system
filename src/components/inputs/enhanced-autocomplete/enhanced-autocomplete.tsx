import { Autocomplete, AutocompleteProps, ChipTypeMap } from "@mui/material";
import React, { useId } from "react";
import { EnhancedTextField } from "../enhanced-text-field";

export interface EnhancedAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "renderInput" | "onChange" | "color"
  > {
  label: string;
  helperText?: string;
  color?: string;
  fetching?: boolean;
  onChangeValue?: (value: T) => void;
}

export const EnhancedAutocomplete = <
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(
  props: EnhancedAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>,
) => {
  const {
    label,
    loading,
    fetching,
    options,
    helperText,
    color,
    onChangeValue = () => null,
    sx,
    ...rest
  } = props;
  const loadingOrFetching = loading || fetching;

  return (
    <Autocomplete
      loading={loadingOrFetching}
      options={fetching ? [] : options}
      onChange={(_, value) => onChangeValue(value as T)}
      {...(rest as any)}
      renderInput={(params) => (
        <EnhancedTextField
          {...params}
          label={label}
          fullWidth
          fetching={fetching}
          loading={loading}
          hexColor={color}
        />
      )}
      sx={sx}
    />
  );
};
