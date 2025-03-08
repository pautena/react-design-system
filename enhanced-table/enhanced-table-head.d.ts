export type Order = "asc" | "desc";
export interface HeadCell<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
    sort: boolean;
}
interface EnhancedTableHeadProps<T> {
    onRequestSort: (property: keyof T) => void;
    order: Order;
    orderBy: keyof T;
    headCells: HeadCell<T>[];
}
export declare const EnhancedTableHead: <T>({ order, orderBy, headCells, onRequestSort, }: EnhancedTableHeadProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
