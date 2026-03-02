import { OnChangeFn, PaginationState, QuerySpecFilter, SortingState } from './remote-data-table.types';
export type UseRemoteDataTableOptions = {
    initialPagination?: Partial<PaginationState>;
    initialSorting?: SortingState;
    initialFilters?: QuerySpecFilter[];
};
export type UseRemoteDataTableResult = {
    pagination: PaginationState;
    onPaginationChange: OnChangeFn<PaginationState>;
    sorting: SortingState;
    onSortingChange: OnChangeFn<SortingState>;
    filters: QuerySpecFilter[];
    onFiltersChange: (filters: QuerySpecFilter[]) => void;
    resetPagination: () => void;
    resetSorting: () => void;
    resetFilters: () => void;
    resetAll: () => void;
};
export declare const useRemoteDataTable: (options?: UseRemoteDataTableOptions) => UseRemoteDataTableResult;
