import type { TableCellProps } from "@mui/material";
import type { ReactNode } from "react";

/**
 * Metadata for configuring column display properties
 */
export type RemoteDataTableColumnMeta = {
  /**
   * Horizontal alignment of cell content
   */
  align?: TableCellProps["align"];
  /**
   * Fixed width of the column
   */
  width?: number | string;
  /**
   * Minimum width of the column
   */
  minWidth?: number | string;
  /**
   * Maximum width of the column
   */
  maxWidth?: number | string;
};

/**
 * Configuration for a table column
 *
 * @template TData - The type of data being displayed in the table
 */
export type RemoteDataTableColumn<TData> = {
  /**
   * Unique identifier for the column
   */
  id: string;
  /**
   * Header content to display
   */
  header: ReactNode;
  /**
   * Key to access data from the row object
   */
  accessorKey?: keyof TData;
  /**
   * Custom cell renderer function
   * @param row - The data row
   */
  cell?: (row: TData) => ReactNode;
  /**
   * Whether sorting is enabled for this column
   * @default true
   */
  enableSorting?: boolean;
  /**
   * Column metadata for styling and layout
   */
  meta?: RemoteDataTableColumnMeta;
};

/**
 * Pagination state for the table
 */
export type PaginationState = {
  /**
   * Current page index (zero-based)
   */
  pageIndex: number;
  /**
   * Number of rows per page
   */
  pageSize: number;
};

/**
 * Sorting state for the table
 */
export type SortingState = Array<{
  /**
   * Column identifier to sort by
   */
  id: string;
  /**
   * Whether to sort in descending order
   */
  desc: boolean;
}>;

/**
 * Generic change handler function
 *
 * @template T - The type of value being changed
 * @param updaterOrValue - New value or updater function
 */
export type OnChangeFn<T> = (updaterOrValue: T | ((old: T) => T)) => void;

/**
 * Query filter operation types
 */
export type QuerySpecOp =
  | "eq" // Equal
  | "neq" // Not equal
  | "lt" // Less than
  | "lte" // Less than or equal
  | "gt" // Greater than
  | "gte" // Greater than or equal
  | "ilike" // Case-insensitive like
  | "in" // In array
  | "isnull"; // Is null

/**
 * Field data types for query filters
 */
export type QuerySpecFieldType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | "datetime";

/**
 * Option for select/dropdown fields in query builder
 */
export type QuerySpecFieldOption = {
  /**
   * Display label for the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
};

/**
 * Field specification for query builder
 */
export type QuerySpecField = {
  /**
   * Field name/identifier
   */
  name: string;
  /**
   * Display label for the field
   */
  label: string;
  /**
   * Data type of the field
   * @default "string"
   */
  type?: QuerySpecFieldType;
  /**
   * Allowed operations for this field
   */
  ops?: QuerySpecOp[];
  /**
   * Placeholder text for input
   */
  placeholder?: string;
  /**
   * Options for select/dropdown fields
   */
  options?: QuerySpecFieldOption[];
};

/**
 * Active filter in the query builder
 */
export type QuerySpecFilter = {
  /**
   * Unique identifier for the filter
   */
  id: string;
  /**
   * Field name being filtered
   */
  field: string;
  /**
   * Filter operation
   */
  op: QuerySpecOp;
  /**
   * Filter value
   */
  value?: string;
};

/**
 * Props for the query builder component
 */
export type RemoteDataTableQueryBuilderProps = {
  /**
   * Available fields for filtering
   */
  fields: QuerySpecField[];
  /**
   * Current active filters
   */
  filters: QuerySpecFilter[];
  /**
   * Callback when filters change
   * @param filters - Updated filters
   */
  onFiltersChange: (filters: QuerySpecFilter[]) => void;
  /**
   * Placeholder text for the query input
   */
  placeholder?: string;
  /**
   * Custom formatter for filter summary display
   * @param filters - Current filters
   * @param fields - Available fields
   */
  summaryFormatter?: (
    filters: QuerySpecFilter[],
    fields: QuerySpecField[],
  ) => string;
};
