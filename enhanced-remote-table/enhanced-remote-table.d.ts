import { ReactNode } from '../../node_modules/react';
import { HeadCell, Order } from '../enhanced-table';
export interface EnhancedRemoteTableProps<T> {
    data: T[];
    loading: boolean;
    defaultSort: keyof T;
    defaultOrder?: Order;
    columns: HeadCell<T>[];
    children: (data: T, index: number) => ReactNode;
    onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
}
export declare const EnhancedRemoteTable: <T>({ children, data, loading, columns, defaultSort, defaultOrder, onRequestSort, }: EnhancedRemoteTableProps<T>) => import("react/jsx-runtime").JSX.Element;
