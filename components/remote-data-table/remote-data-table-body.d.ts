import { RemoteDataTableColumn, SortingState } from './remote-data-table.types';
/**
 * Props for the RemoteDataTableBody component
 *
 * @template TData - The type of data being displayed in the table
 */
type RemoteDataTableBodyProps<TData> = {
    /** Array of data items to display */
    data: TData[];
    /** Column definitions for the table */
    columns: RemoteDataTableColumn<TData>[];
    /** Whether table rows are loading */
    loading: boolean;
    /** Message to display when there is no data */
    emptyMessage: string;
    /** Sorting state for the table */
    sorting?: SortingState;
    /** Callback fired when sorting changes */
    onSortingChange?: (sorting: SortingState) => void;
    /** Callback fired when a row is clicked */
    onRowClick?: (row: TData) => void;
    /** Optional function to generate unique row IDs */
    getRowId?: (row: TData, index: number) => string;
};
export declare const RemoteDataTableBody: <TData>({ data, columns, loading, emptyMessage, sorting, onSortingChange, onRowClick, getRowId, }: RemoteDataTableBodyProps<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
