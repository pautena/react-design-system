import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
export type TextFieldProps = MuiTextFieldProps & {
    fetching?: boolean;
    loading?: boolean;
    hexColor?: string;
};
export declare const TextField: ({ id: overrideId, label, InputLabelProps, InputProps, fetching, loading, helperText, hexColor, size, fullWidth, sx, ...rest }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
