import { ReactNode } from '../../node_modules/react';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
export type SelectSize = "small" | "medium";
export interface SelectProps<T> {
    label: string;
    value: T;
    loading?: boolean;
    fetching?: boolean;
    size?: SelectSize;
    color?: string;
    fullWidth?: boolean;
    children?: ReactNode;
    onChange?: SelectInputProps<T>["onChange"];
}
export declare const Select: <T extends ReactNode>({ label, value, loading, fetching, size, fullWidth, color, children, onChange, }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
