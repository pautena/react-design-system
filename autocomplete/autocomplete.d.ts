import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import { default as React } from '../../node_modules/react';
import { ChipTypeMap } from '@mui/material/Chip';
export interface AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"]> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>, "renderInput" | "onChange" | "color"> {
    label: string;
    helperText?: string;
    color?: string;
    fetching?: boolean;
    onChangeValue?: (value: T) => void;
}
export declare const Autocomplete: <T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined, ChipComponent extends React.ElementType = "div">(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => import("react/jsx-runtime").JSX.Element;
