import { OnChangeFn, PaginationState, RemoteDataTableColumn, RemoteDataTableQueryBuilderProps, SortingState } from './remote-data-table.types';
export { buildQuerySpecParams } from './query-spec-utils';
export type { OnChangeFn, PaginationState, QuerySpecField, QuerySpecFieldOption, QuerySpecFieldType, QuerySpecFilter, QuerySpecOp, RemoteDataTableColumn, RemoteDataTableColumnMeta, RemoteDataTableQueryBuilderProps, SortingState, } from './remote-data-table.types';
/**
 * Props for the RemoteDataTable component
 */
export type RemoteDataTableProps<TData> = {
    /** Array of data items to display in the table */
    data: TData[];
    /** Column definitions for the table */
    columns: RemoteDataTableColumn<TData>[];
    /** Optional function to generate unique row IDs. If not provided, uses array index */
    getRowId?: (row: TData, index: number) => string;
    /** Current pagination state (pageIndex and pageSize) */
    pagination: PaginationState;
    /** Callback fired when pagination changes */
    onPaginationChange: OnChangeFn<PaginationState>;
    /** Current sorting state */
    sorting?: SortingState;
    /** Callback fired when sorting changes */
    onSortingChange?: OnChangeFn<SortingState>;
    /** Total number of rows available (for server-side pagination). If not provided, uses data.length */
    rowCount?: number;
    /** Whether data is currently loading */
    loading?: boolean;
    /** Message to display when there is no data
     * @default "No data available"
     */
    emptyMessage?: string;
    /** Available page size options for the pagination dropdown
     * @default [10, 25, 50]
     */
    pageSizeOptions?: number[];
    /** Callback fired when a row is clicked */
    onRowClick?: (row: TData) => void;
    /** Configuration for the query builder (filters) */
    query?: RemoteDataTableQueryBuilderProps;
};
/**
 * A table component designed for displaying remote/server-side data with built-in
 * pagination, sorting, and filtering capabilities.
 *
 * This component is fully controlled - all state (pagination, sorting, filters) must be
 * managed by the parent component. For convenience, use the `useRemoteDataTable` hook
 * to manage this state.
 *
 * @example
 * ```tsx
 * const tableState = useRemoteDataTable({
 *   initialPagination: { pageSize: 25 }
 * });
 *
 * <RemoteDataTable
 *   data={items}
 *   columns={columns}
 *   {...tableState}
 *   query={{
 *     fields: queryFields,
 *     filters: tableState.filters,
 *     onFiltersChange: tableState.onFiltersChange
 *   }}
 * />
 * ```
 */
export declare const RemoteDataTable: <TData>({ data, columns, getRowId, pagination, onPaginationChange, sorting, onSortingChange, rowCount, loading, emptyMessage, pageSizeOptions, onRowClick, query, }: RemoteDataTableProps<TData>) => import("react/jsx-runtime").JSX.Element;
