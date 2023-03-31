import {
  Autocomplete,
  autocompleteClasses,
  AutocompleteProps,
  Box,
  ChipTypeMap,
  CircularProgress,
  TextField,
} from "@mui/material";
import React from "react";

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
      renderInput={(params) => {
        return (
          <TextField
            label={label}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Box display="flex" flexDirection="row">
                  {params.InputProps.endAdornment}
                  {loadingOrFetching ? (
                    <CircularProgress color="inherit" size={20} sx={{ ml: 1 }} />
                  ) : null}
                </Box>
              ),
            }}
          />
        );
      }}
    />
  );
};
