import { ReactNode } from '../../node_modules/react';
import { HeadCell, Order } from './enhanced-table-head';
/**
 * Props for the EnhancedTable component.
 *
 * @template T - The type of data being displayed in the table.
 */
interface EnhancedTableProps<T> {
    /**
     * The array of data to be displayed in the table.
     */
    readonly data: T[];
    /**
     * Optional. If true, enables the search functionality.
     */
    search?: boolean;
    /**
     * The key of the data to sort by default.
     */
    defaultSort: keyof T;
    /**
     * Optional. The default order of sorting (ascending or descending).
     */
    defaultOrder?: Order;
    /**
     * Optional. If true, displays a loading indicator.
     */
    loading?: boolean;
    /**
     * The columns configuration for the table.
     */
    columns: HeadCell<T>[];
    /**
     * A render prop function that takes the sorted and filtered data and returns a ReactNode.
     */
    children: (data: T[]) => ReactNode;
}
interface EnhancedTableProps<T> {
    readonly data: T[];
    search?: boolean;
    defaultSort: keyof T;
    defaultOrder?: Order;
    loading?: boolean;
    columns: HeadCell<T>[];
    children: (data: T[]) => ReactNode;
}
/**
 * EnhancedTable component provides a table with sorting, filtering, and loading states.
 */
export declare const EnhancedTable: {
    <T>({ children, data, search, columns, defaultSort, defaultOrder, loading, }: EnhancedTableProps<T>): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        defaultOrder: string;
    };
};
export {};
