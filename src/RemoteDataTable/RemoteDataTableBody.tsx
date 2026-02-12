import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import type {
  RemoteDataTableColumn,
  SortingState,
} from "./RemoteDataTable.types";

type RemoteDataTableBodyProps<TData> = {
  data: TData[];
  columns: RemoteDataTableColumn<TData>[];
  loading: boolean;
  emptyMessage: string;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
  onRowClick?: (row: TData) => void;
  getRowId?: (row: TData, index: number) => string;
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

    const existingSort = sorting.find((s) => s.id === columnId);
    if (!existingSort) {
      onSortingChange([{ id: columnId, desc: false }]);
    } else if (!existingSort.desc) {
      onSortingChange([{ id: columnId, desc: true }]);
    } else {
      onSortingChange([]);
    }
  };

  const getSortDirection = (
    columnId: string,
  ): "asc" | "desc" | false | undefined => {
    const sort = sorting.find((s) => s.id === columnId);
    if (!sort) return false;
    return sort.desc ? "desc" : "asc";
  };

  return (
    <TableContainer>
      <Table size="small" aria-busy={loading}>
        <TableHead sx={{ backgroundColor: "grey.50" }}>
          <TableRow>
            {columns.map((column) => {
              const sortDirection = getSortDirection(column.id);
              const canSort = column.enableSorting && onSortingChange;

              return (
                <TableCell
                  key={column.id}
                  align={column.meta?.align}
                  sortDirection={sortDirection}
                  sx={{
                    fontWeight: 600,
                    color: "text.secondary",
                    width: column.meta?.width,
                    minWidth: column.meta?.minWidth,
                    maxWidth: column.meta?.maxWidth,
                  }}
                >
                  {canSort ? (
                    <TableSortLabel
                      active={sortDirection !== false}
                      direction={
                        sortDirection === false ? "asc" : sortDirection
                      }
                      onClick={() => handleSort(column.id)}
                    >
                      {column.header}
                    </TableSortLabel>
                  ) : (
                    column.header
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columnCount}>
                <Box display="flex" alignItems="center" gap={1} py={2}>
                  <CircularProgress size={20} />
                  <Typography variant="body2">Loading</Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : showEmpty ? (
            <TableRow>
              <TableCell colSpan={columnCount}>
                <Typography variant="body2" color="text.secondary" py={2}>
                  {emptyMessage}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => {
              const rowId = getRowId ? getRowId(row, index) : String(index);

              return (
                <TableRow
                  key={rowId}
                  hover={isInteractive}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  sx={
                    isInteractive
                      ? {
                          cursor: "pointer",
                        }
                      : undefined
                  }
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
                        align={column.meta?.align}
                        sx={{
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
    </TableContainer>
  );
};
