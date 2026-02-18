import type {
  CircularProgressProps,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import FormControl, { type FormControlProps } from "@mui/material/FormControl";
import FormHelperText, {
  type FormHelperTextProps,
} from "@mui/material/FormHelperText";
import { iconButtonClasses } from "@mui/material/IconButton";
import InputAdornment, {
  type InputAdornmentProps,
} from "@mui/material/InputAdornment";
import InputLabel, {
  inputLabelClasses,
  type InputLabelProps as MuiInputLabelProps,
} from "@mui/material/InputLabel";
import LinearProgress, {
  type LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import OutlinedInput, {
  type OutlinedInputProps,
  outlinedInputClasses,
} from "@mui/material/OutlinedInput";
import useId from "@mui/utils/useId";
import type { JSXElementConstructor } from "react";

/**
 * Interface representing the slots for the TextField component.
 */
export interface TextFieldSlots {
  /**
   * Root form control component
   */
  formControl?: JSXElementConstructor<FormControlProps>;
  /**
   * Input label component
   */
  inputLabel?: JSXElementConstructor<MuiInputLabelProps>;
  /**
   * Input component
   */
  input?: JSXElementConstructor<OutlinedInputProps>;
  /**
   * Input adornment component for end position
   */
  inputAdornment?: JSXElementConstructor<InputAdornmentProps>;
  /**
   * Loading indicator component
   */
  loadingIndicator?: JSXElementConstructor<CircularProgressProps>;
  /**
   * Fetching indicator component
   */
  fetchingIndicator?: JSXElementConstructor<LinearProgressProps>;
  /**
   * Helper text component
   */
  helperText?: JSXElementConstructor<FormHelperTextProps>;
}

/**
 * Interface representing the slot properties for the TextField component.
 */
export interface TextFieldSlotProps {
  /**
   * Props for the form control
   */
  formControl?: Partial<FormControlProps>;
  /**
   * Props for the input label
   */
  inputLabel?: Partial<MuiInputLabelProps>;
  /**
   * Props for the input
   */
  input?: Partial<OutlinedInputProps>;
  /**
   * Props for the input adornment
   */
  inputAdornment?: Partial<InputAdornmentProps>;
  /**
   * Props for the loading indicator
   */
  loadingIndicator?: Partial<CircularProgressProps>;
  /**
   * Props for the fetching indicator
   */
  fetchingIndicator?: Partial<LinearProgressProps>;
  /**
   * Props for the helper text
   */
  helperText?: Partial<FormHelperTextProps>;
}

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
  /**
   * Optional slots for custom rendering within the text field
   */
  slots?: TextFieldSlots;
  /**
   * Optional props for the slots
   */
  slotProps?: TextFieldSlotProps;
};

/**
 * A customizable TextField component that extends the functionality of the Material-UI TextField component
 * and supports various props for styling and functionality.
 *
 * Supports extensive customization through slots and slotProps.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TextField label="Email" />
 *
 * // With loading state
 * <TextField label="Search" loading />
 *
 * // Custom loading indicator size
 * <TextField
 *   label="Username"
 *   loading
 *   slotProps={{
 *     loadingIndicator: { size: 24 }
 *   }}
 * />
 * ```
 */
export function TextField({
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
  slots,
  slotProps,
  ...rest
}: TextFieldProps) {
  const id = useId(overrideId);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;

  // Slot components with defaults
  const FormControlComponent = slots?.formControl ?? FormControl;
  const InputLabelComponent = slots?.inputLabel ?? InputLabel;
  const InputComponent = slots?.input ?? OutlinedInput;
  const InputAdornmentComponent = slots?.inputAdornment ?? InputAdornment;
  const LoadingIndicatorComponent = slots?.loadingIndicator ?? CircularProgress;
  const FetchingIndicatorComponent = slots?.fetchingIndicator ?? LinearProgress;
  const HelperTextComponent = slots?.helperText ?? FormHelperText;

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
    <FormControlComponent
      sx={hexColorSx}
      fullWidth={fullWidth}
      {...slotProps?.formControl}
    >
      <InputLabelComponent
        size={size === "small" ? "small" : "medium"}
        id={inputLabelId}
        htmlFor={id}
        {...InputLabelProps}
        {...slotProps?.inputLabel}
      >
        {label}
      </InputLabelComponent>
      <InputComponent
        {...InputProps}
        id={id}
        label={label}
        size={size}
        fullWidth={fullWidth}
        endAdornment={
          <InputAdornmentComponent
            position="end"
            {...slotProps?.inputAdornment}
          >
            {InputProps?.endAdornment}
            {loading ? (
              <LoadingIndicatorComponent
                color="inherit"
                size={20}
                sx={{ ml: 1 }}
                {...slotProps?.loadingIndicator}
              />
            ) : null}
          </InputAdornmentComponent>
        }
        sx={sx}
        {...(rest as any)}
        {...slotProps?.input}
      />
      {fetching && !loading && (
        <FetchingIndicatorComponent
          color="inherit"
          sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
          {...slotProps?.fetchingIndicator}
        />
      )}
      {helperText && (
        <HelperTextComponent id={helperTextId} {...slotProps?.helperText}>
          {helperText}
        </HelperTextComponent>
      )}
    </FormControlComponent>
  );
}

export default TextField;
