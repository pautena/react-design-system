import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { OnChangeFn, PaginationState } from "./remote-data-table.types";

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

export const RemoteDataTablePagination = ({
  pagination,
  onPaginationChange,
  rowCount,
  pageSizeOptions,
}: RemoteDataTablePaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(rowCount / pagination.pageSize));
  const canPrevious = pagination.pageIndex > 0;
  const canNext = pagination.pageIndex < totalPages - 1;
  const from =
    rowCount === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1;
  const to = Math.min(
    rowCount,
    (pagination.pageIndex + 1) * pagination.pageSize,
  );

  return (
    <div className="flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span>Rows per page</span>
        <select
          aria-label="Rows per page"
          className={cn(
            "h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground",
          )}
          value={pagination.pageSize}
          onChange={(event) => {
            onPaginationChange((prev) => ({
              ...prev,
              pageIndex: 0,
              pageSize: Number(event.target.value),
            }));
          }}
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span>
          {from}-{to} of {rowCount}
        </span>
        <span className="text-xs text-muted-foreground">
          Page {totalPages === 0 ? 0 : pagination.pageIndex + 1} of {totalPages}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            aria-label="Go to previous page"
            disabled={!canPrevious}
            onClick={() =>
              onPaginationChange((prev) => ({
                ...prev,
                pageIndex: Math.max(0, prev.pageIndex - 1),
              }))
            }
          >
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Go to next page"
            disabled={!canNext}
            onClick={() =>
              onPaginationChange((prev) => ({
                ...prev,
                pageIndex: Math.min(totalPages - 1, prev.pageIndex + 1),
              }))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
