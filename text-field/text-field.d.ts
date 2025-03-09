import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
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
export declare const TextField: ({ id: overrideId, label, InputLabelProps, InputProps, fetching, loading, helperText, hexColor, size, fullWidth, sx, ...rest }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
