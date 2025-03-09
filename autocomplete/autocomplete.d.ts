import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import { default as React } from '../../node_modules/react';
import { ChipTypeMap } from '@mui/material/Chip';
/**
 * Props for the Autocomplete component.
 */
export interface AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput" | "onChange" | "color"> {
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
}
export interface AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput" | "onChange" | "color"> {
    label: string;
    helperText?: string;
    color?: string;
    fetching?: boolean;
    onChangeValue?: (value: T) => void;
}
/**
 * Autocomplete component that wraps the MUI Autocomplete component with additional props.
 */
export declare const Autocomplete: <T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType = "div">(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => import("react/jsx-runtime").JSX.Element;
