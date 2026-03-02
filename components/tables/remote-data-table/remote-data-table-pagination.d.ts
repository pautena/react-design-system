import { OnChangeFn, PaginationState } from './remote-data-table.types';
/**
 * Props for the RemoteDataTablePagination component
 */
type RemoteDataTablePaginationProps = {
    /** Current pagination state */
    pagination: PaginationState;
    /** Callback fired when pagination changes */
    onPaginationChange: OnChangeFn<PaginationState>;
    /** Total number of rows available */
    rowCount: number;
    /** Available page size options */
    pageSizeOptions: number[];
};
export declare const RemoteDataTablePagination: ({ pagination, onPaginationChange, rowCount, pageSizeOptions, }: RemoteDataTablePaginationProps) => import("react/jsx-runtime").JSX.Element;
export {};
