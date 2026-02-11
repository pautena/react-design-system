import { TableCellProps } from '@mui/material';
import { ReactNode } from '../../node_modules/react';
export type RemoteDataTableColumnMeta = {
    align?: TableCellProps["align"];
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
};
export type RemoteDataTableColumn<TData> = {
    id: string;
    header: ReactNode;
    accessorKey?: keyof TData;
    cell?: (row: TData) => ReactNode;
    enableSorting?: boolean;
    meta?: RemoteDataTableColumnMeta;
};
export type PaginationState = {
    pageIndex: number;
    pageSize: number;
};
export type SortingState = Array<{
    id: string;
    desc: boolean;
}>;
export type OnChangeFn<T> = (updaterOrValue: T | ((old: T) => T)) => void;
export type QuerySpecOp = "eq" | "neq" | "lt" | "lte" | "gt" | "gte" | "ilike" | "in" | "isnull";
export type QuerySpecFieldType = "string" | "number" | "boolean" | "date" | "datetime";
export type QuerySpecFieldOption = {
    label: string;
    value: string;
};
export type QuerySpecField = {
    name: string;
    label: string;
    type?: QuerySpecFieldType;
    ops?: QuerySpecOp[];
    placeholder?: string;
    options?: QuerySpecFieldOption[];
};
export type QuerySpecFilter = {
    id: string;
    field: string;
    op: QuerySpecOp;
    value?: string;
};
export type RemoteDataTableQueryBuilderProps = {
    fields: QuerySpecField[];
    filters: QuerySpecFilter[];
    onFiltersChange: (filters: QuerySpecFilter[]) => void;
    placeholder?: string;
    summaryFormatter?: (filters: QuerySpecFilter[], fields: QuerySpecField[]) => string;
};
