import { autocompleteClasses } from "@mui/material/Autocomplete";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { iconButtonClasses } from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import OutlinedInput, {
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import useId from "@mui/utils/useId";

/**
 * Props for the TextField component.
 *
 * @extends MuiTextFieldProps
 */
export type TextFieldProps = MuiTextFieldProps & {
  /**
   * Indicates if the field is in a fetching state.
   */
  fetching?: boolean;
  /**
   * Indicates if the field is in a loading state.
   */
  loading?: boolean;
  /**
   * Optional hex color code for the text field.
   */
  hexColor?: string;
};

/**
 * A customizable TextField component that extends the functionality of the Material-UI TextField component
 * and supports various props for styling and functionality.
 */
export const TextField = ({
  id: overrideId,
  label,
  InputLabelProps,
  InputProps,
  fetching,
  loading,
  helperText,
  hexColor,
  size,
  fullWidth,
  sx,
  ...rest
}: TextFieldProps) => {
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
        [`& .${autocompleteClasses.endAdornment} .${iconButtonClasses.root}`]: {
          color: hexColor,
        },
      }
    : {};

  return (
    <FormControl sx={hexColorSx} fullWidth={fullWidth}>
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
        fullWidth={fullWidth}
        endAdornment={
          <InputAdornment position="end">
            {InputProps?.endAdornment}
            {loading ? (
              <CircularProgress color="inherit" size={20} sx={{ ml: 1 }} />
            ) : null}
          </InputAdornment>
        }
        sx={sx}
        {...(rest as any)}
      />
      {fetching && !loading && (
        <LinearProgress
          color="inherit"
          sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        />
      )}
      {helperText && (
        <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
