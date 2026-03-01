import { ArrowUpDown, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type {
  RemoteDataTableColumn,
  SortingState,
} from "./remote-data-table.types";

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

const alignClassName = (align?: "left" | "center" | "right") => {
  if (align === "center") return "text-center";
  if (align === "right") return "text-right";
  return "text-left";
};

export const RemoteDataTableBody = <TData,>({
  data,
  columns,
  loading,
  emptyMessage,
  sorting = [],
  onSortingChange,
  onRowClick,
  getRowId,
}: RemoteDataTableBodyProps<TData>) => {
  const columnCount = Math.max(columns.length, 1);
  const showEmpty = !loading && data.length === 0;
  const isInteractive = Boolean(onRowClick);

  const handleSort = (columnId: string) => {
    if (!onSortingChange) return;

    const existingSort = sorting.find((sort) => sort.id === columnId);
    if (!existingSort) {
      onSortingChange([{ id: columnId, desc: false }]);
    } else if (!existingSort.desc) {
      onSortingChange([{ id: columnId, desc: true }]);
    } else {
      onSortingChange([]);
    }
  };

  const getSortDirection = (columnId: string) => {
    const sort = sorting.find((item) => item.id === columnId);
    if (!sort) return false;
    return sort.desc ? "desc" : "asc";
  };

  const getSortIcon = (direction: "asc" | "desc" | false) => {
    if (direction === "asc") {
      return <ChevronUp className="h-4 w-4" />;
    }

    if (direction === "desc") {
      return <ChevronDown className="h-4 w-4" />;
    }

    return <ArrowUpDown className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <Table aria-busy={loading}>
      <TableHeader className="bg-muted/40">
        <TableRow>
          {columns.map((column) => {
            const sortDirection = getSortDirection(column.id);
            const canSort = (column.enableSorting ?? true) && onSortingChange;

            return (
              <TableHead
                key={column.id}
                aria-sort={
                  sortDirection === "asc"
                    ? "ascending"
                    : sortDirection === "desc"
                      ? "descending"
                      : "none"
                }
                className={cn(
                  "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
                  alignClassName(column.meta?.align),
                )}
                style={{
                  width: column.meta?.width,
                  minWidth: column.meta?.minWidth,
                  maxWidth: column.meta?.maxWidth,
                }}
              >
                {canSort ? (
                  <button
                    type="button"
                    className="flex w-full items-center gap-2"
                    onClick={() => handleSort(column.id)}
                  >
                    <span className="truncate">{column.header}</span>
                    {getSortIcon(sortDirection)}
                  </button>
                ) : (
                  column.header
                )}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={columnCount}>
              <div className="flex items-center gap-2 py-3 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Loading</span>
              </div>
            </TableCell>
          </TableRow>
        ) : showEmpty ? (
          <TableRow>
            <TableCell colSpan={columnCount}>
              <p className="py-3 text-sm text-muted-foreground">
                {emptyMessage}
              </p>
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, index) => {
            const rowId = getRowId ? getRowId(row, index) : String(index);

            return (
              <TableRow
                key={rowId}
                className={cn(isInteractive && "cursor-pointer")}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((column) => {
                  const value = column.accessorKey
                    ? row[column.accessorKey]
                    : undefined;
                  const cellContent = column.cell
                    ? column.cell(row)
                    : String(value ?? "");

                  return (
                    <TableCell
                      key={column.id}
                      className={cn(alignClassName(column.meta?.align))}
                      style={{
                        width: column.meta?.width,
                        minWidth: column.meta?.minWidth,
                        maxWidth: column.meta?.maxWidth,
                      }}
                    >
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};
