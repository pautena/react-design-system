import { ReactNode } from '../../node_modules/react';
import { HeadCell, Order } from './enhanced-table-head';
interface Props<T> {
    readonly data: T[];
    search?: boolean;
    defaultSort: keyof T;
    defaultOrder?: Order;
    loading?: boolean;
    columns: HeadCell<T>[];
    children: (data: T[]) => ReactNode;
}
export declare const EnhancedTable: {
    <T>({ children, data, search, columns, defaultSort, defaultOrder, loading, }: Props<T>): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        defaultOrder: string;
    };
};
export {};
