import { RemoteDataTableColumn, SortingState } from './remote-data-table.types';
type RemoteDataTableBodyProps<TData> = {
    data: TData[];
    columns: RemoteDataTableColumn<TData>[];
    loading: boolean;
    emptyMessage: string;
    sorting?: SortingState;
    onSortingChange?: (sorting: SortingState) => void;
    onRowClick?: (row: TData) => void;
    getRowId?: (row: TData, index: number) => string;
};
export declare const RemoteDataTableBody: <TData>({ data, columns, loading, emptyMessage, sorting, onSortingChange, onRowClick, getRowId, }: RemoteDataTableBodyProps<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
