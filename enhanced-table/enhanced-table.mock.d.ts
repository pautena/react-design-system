import { HeadCell, Order } from './enhanced-table-head';
export declare const columns: HeadCell<Data>[];
export interface Data {
    id: number;
    name: string;
    startDate: string;
}
export declare const data: Data[];
export interface TestTableProps {
    data: Data[];
    columns: HeadCell<Data>[];
    defaultSort: keyof Data;
    defaultOrder: Order;
    loading: boolean;
}
export declare const TestTable: ({ data, columns, defaultOrder, defaultSort, loading, }: TestTableProps) => import("react/jsx-runtime").JSX.Element;
