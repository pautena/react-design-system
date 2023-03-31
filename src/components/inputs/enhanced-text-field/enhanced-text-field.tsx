import {
  CircularProgress,
  circularProgressClasses,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  inputLabelClasses,
  LinearProgress,
  linearProgressClasses,
  OutlinedInput,
  outlinedInputClasses,
  TextFieldProps,
} from "@mui/material";
import { unstable_useId as useId } from "@mui/utils";
import React from "react";

export type EnhancedTextFieldProps = TextFieldProps & {
  fetching?: boolean;
  loading?: boolean;
  hexColor?: string;
};

export const EnhancedTextField = ({
  id: overrideId,
  label,
  InputLabelProps,
  InputProps,
  fetching,
  loading,
  helperText,
  hexColor,
  size,
  sx,
  ...rest
}: EnhancedTextFieldProps) => {
  const id = useId(overrideId);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;

  const hexColorSx = hexColor
    ? {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${hexColor} !important`,
        },
        [`& .${inputLabelClasses.root}`]: {
          color: hexColor,
        },
        [`& .${outlinedInputClasses.input}`]: {
          color: hexColor,
        },
        [`& .${circularProgressClasses.root}`]: {
          color: hexColor,
        },
        [`& .${linearProgressClasses.bar}`]: {
          backgroundColor: hexColor,
        },
      }
    : {};

  return (
    <FormControl sx={hexColorSx}>
      <InputLabel
        size={size === "small" ? "small" : "normal"}
        id={inputLabelId}
        htmlFor={id}
        {...InputLabelProps}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        {...InputProps}
        id={id}
        label={label}
        size={size}
        endAdornment={
          <InputAdornment position="end">
            {InputProps?.endAdornment}
            {fetching ? <CircularProgress color="inherit" size={20} sx={{ ml: 1 }} /> : null}
          </InputAdornment>
        }
        sx={sx}
        {...(rest as any)}
      />
      {loading && (
        <LinearProgress
          color="inherit"
          sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        />
      )}
      {helperText && <FormHelperText id={helperTextId}>{helperText}</FormHelperText>}
    </FormControl>
  );
};
