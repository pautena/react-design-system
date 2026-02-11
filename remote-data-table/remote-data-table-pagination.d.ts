import { OnChangeFn, PaginationState } from './remote-data-table.types';
type RemoteDataTablePaginationProps = {
    pagination: PaginationState;
    onPaginationChange: OnChangeFn<PaginationState>;
    rowCount: number;
    pageSizeOptions: number[];
};
export declare const RemoteDataTablePagination: ({ pagination, onPaginationChange, rowCount, pageSizeOptions, }: RemoteDataTablePaginationProps) => import("react/jsx-runtime").JSX.Element;
export {};
