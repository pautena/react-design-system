import { CircularProgressProps, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { FormControlProps } from '@mui/material/FormControl';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';
import { LinearProgressProps } from '@mui/material/LinearProgress';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { JSXElementConstructor } from '../../node_modules/react';
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
export declare function TextField({ id: overrideId, label, InputLabelProps, InputProps, fetching, loading, helperText, hexColor, size, fullWidth, sx, slots, slotProps, ...rest }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export default TextField;
