import { SxProps, Theme } from '@mui/material/styles';
export type SearchInputSize = "small" | "medium";
export interface SearchFilter {
    id: string;
    label: string;
    type: "text" | "number" | "boolean" | "datetime";
}
export interface SearchInputProps<T> {
    label?: string;
    placeholder?: string;
    fullWidth?: boolean;
    helperText?: string;
    size?: SearchInputSize;
    filters?: SearchFilter[];
    sx?: SxProps<Theme>;
    dateFormat?: string;
    onSearch: (data: T) => void;
}
export declare const SearchInput: <T>({ label, placeholder, helperText, size, fullWidth, dateFormat, filters, onSearch, sx, }: SearchInputProps<T>) => import("react/jsx-runtime").JSX.Element;
