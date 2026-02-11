import { useState } from "react";
import type {
  OnChangeFn,
  PaginationState,
  QuerySpecFilter,
  SortingState,
} from "./remote-data-table.types";

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

const DEFAULT_PAGINATION: PaginationState = {
  pageIndex: 0,
  pageSize: 10,
};

export const useRemoteDataTable = (
  options: UseRemoteDataTableOptions = {},
): UseRemoteDataTableResult => {
  const { initialPagination = {}, initialSorting = [], initialFilters = [] } = options;

  const resolvedInitialPagination: PaginationState = {
    ...DEFAULT_PAGINATION,
    ...initialPagination,
  };

  const [pagination, setPagination] = useState<PaginationState>(resolvedInitialPagination);
  const [sorting, setSorting] = useState<SortingState>(initialSorting);
  const [filters, setFilters] = useState<QuerySpecFilter[]>(initialFilters);

  const resetPagination = () => {
    setPagination(resolvedInitialPagination);
  };

  const resetSorting = () => {
    setSorting(initialSorting);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const resetAll = () => {
    resetPagination();
    resetSorting();
    resetFilters();
  };

  return {
    pagination,
    onPaginationChange: setPagination,
    sorting,
    onSortingChange: setSorting,
    filters,
    onFiltersChange: setFilters,
    resetPagination,
    resetSorting,
    resetFilters,
    resetAll,
  };
};
