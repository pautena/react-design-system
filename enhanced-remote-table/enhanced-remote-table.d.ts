import { ReactNode } from '../../node_modules/react';
import { HeadCell, Order } from '../enhanced-table';
export interface EnhancedRemoteTableProps<T> {
    /**
     * The array of data to be displayed in the table.
     */
    data: T[];
    /**
     * Indicates whether the table is in a loading state.
     */
    loading: boolean;
    /**
     * The default column to sort by.
     */
    defaultSort: keyof T;
    /**
     * The default order of sorting (ascending or descending).
     */
    defaultOrder?: Order;
    /**
     * The columns configuration for the table.
     */
    columns: HeadCell<T>[];
    /**
     * A render function for each row of data.
     */
    children: (data: T, index: number) => ReactNode;
    /**
     * Callback function to handle sorting requests.
     */
    onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
}
export interface EnhancedRemoteTableProps<T> {
    data: T[];
    loading: boolean;
    defaultSort: keyof T;
    defaultOrder?: Order;
    columns: HeadCell<T>[];
    children: (data: T, index: number) => ReactNode;
    onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
}
/**
 * EnhancedRemoteTable component provides a table with remote data handling capabilities.
 * It supports sorting and displays a loading indicator while data is being fetched.
 */
export declare const EnhancedRemoteTable: <T>({ children, data, loading, columns, defaultSort, defaultOrder, onRequestSort, }: EnhancedRemoteTableProps<T>) => import("react/jsx-runtime").JSX.Element;
