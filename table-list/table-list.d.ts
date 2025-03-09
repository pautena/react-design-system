import { HeadCell, Order } from '../enhanced-table';
import { BasicModelInstance } from '../generators';
export interface TableRowOption<T extends BasicModelInstance> {
    id: string;
    label: string;
    onClick: (item: T) => void;
}
export interface TableListProps<T extends BasicModelInstance> {
    columns: HeadCell<T>[];
    data: T[];
    search?: boolean;
    defaultSort: string;
    defaultOrder?: Order;
    loading?: boolean;
    options?: TableRowOption<T>[];
    onClick?: (d: T) => void;
}
/**
 * TableList component renders a list about a given instances of a model.
 */
export declare const TableList: <T extends BasicModelInstance>({ columns: columnsProp, options, data, onClick, search, defaultSort, defaultOrder, loading, }: TableListProps<T>) => import("react/jsx-runtime").JSX.Element;
