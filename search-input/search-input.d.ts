import { SxProps, Theme } from '@mui/material/styles';
export type SearchInputSize = "small" | "medium";
export interface SearchFilter {
    id: string;
    label: string;
    type: "text" | "number" | "boolean" | "datetime";
}
export interface SearchInputProps<T> {
    /**
     * The label for the search input.
     */
    label?: string;
    /**
     * The placeholder text for the search input.
     */
    placeholder?: string;
    /**
     * If true, the search input will take up the full width of its container.
     */
    fullWidth?: boolean;
    /**
     * Helper text to display below the search input.
     */
    helperText?: string;
    /**
     * The size of the search input.
     */
    size?: SearchInputSize;
    /**
     * An array of filters to apply to the search.
     */
    filters?: SearchFilter[];
    /**
     * The system prop that allows defining system overrides and additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * The format to use for date inputs.
     */
    dateFormat?: string;
    /**
     * Callback function to handle the search action.
     */
    onSearch: (data: T) => void;
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
/**
 * A generic search input component that supports various types of filters.
 */
export declare const SearchInput: <T>({ label, placeholder, helperText, size, fullWidth, dateFormat, filters, onSearch, sx, }: SearchInputProps<T>) => import("react/jsx-runtime").JSX.Element;
