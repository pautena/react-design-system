import { TablePagination } from "@mui/material";
import type { OnChangeFn, PaginationState } from "./remote-data-table.types";

type RemoteDataTablePaginationProps = {
  pagination: PaginationState;
  onPaginationChange: OnChangeFn<PaginationState>;
  rowCount: number;
  pageSizeOptions: number[];
};

export const RemoteDataTablePagination = ({
  pagination,
  onPaginationChange,
  rowCount,
  pageSizeOptions,
}: RemoteDataTablePaginationProps) => (
  <TablePagination
    component="div"
    count={rowCount}
    page={pagination.pageIndex}
    onPageChange={(_event, page) =>
      onPaginationChange((prev) => ({
        ...prev,
        pageIndex: page,
      }))
    }
    rowsPerPage={pagination.pageSize}
    onRowsPerPageChange={(event) => {
      onPaginationChange((prev) => ({
        ...prev,
        pageIndex: 0,
        pageSize: Number(event.target.value),
      }));
    }}
    rowsPerPageOptions={pageSizeOptions}
    labelDisplayedRows={({ from, to, count, page }) =>
      count === -1 ? `Page ${page + 1}` : `${from}-${to} of ${count}`
    }
  />
);
