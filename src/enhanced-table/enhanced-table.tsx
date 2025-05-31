import Search from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";
import { type ReactNode, useState } from "react";
import {
  EnhancedTableHead,
  type HeadCell,
  type Order,
} from "./enhanced-table-head";

function getFilter<T>(columns: HeadCell<T>[], search: string) {
  return (d: T) => {
    return (
      !search ||
      columns.some((col) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value = (d as any)[col.id];
        if (value?.toLowerCase) {
          value = value.toLowerCase();
        }
        return value?.toString().includes(search.toLowerCase());
      })
    );
  };
}

function getComparator<T>(
  order: Order,
  orderBy: keyof T,
): (a: T, b: T) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 * Props for the EnhancedTable component.
 *
 * @template T - The type of data being displayed in the table.
 */
interface EnhancedTableProps<T> {
  /**
   * The array of data to be displayed in the table.
   */
  readonly data: T[];
  /**
   * Optional. If true, enables the search functionality.
   */
  search?: boolean;
  /**
   * The key of the data to sort by default.
   */
  defaultSort: keyof T;
  /**
   * Optional. The default order of sorting (ascending or descending).
   */
  defaultOrder?: Order;
  /**
   * Optional. If true, displays a loading indicator.
   */
  loading?: boolean;
  /**
   * The columns configuration for the table.
   */
  columns: HeadCell<T>[];
  /**
   * A render prop function that takes the sorted and filtered data and returns a ReactNode.
   */
  children: (data: T[]) => ReactNode;
}
interface EnhancedTableProps<T> {
  readonly data: T[];
  search?: boolean;
  defaultSort: keyof T;
  defaultOrder?: Order;
  loading?: boolean;
  columns: HeadCell<T>[];
  children: (data: T[]) => ReactNode;
}

/**
 * EnhancedTable component provides a table with sorting, filtering, and loading states.
 */
export const EnhancedTable = <T,>({
  children,
  data,
  search,
  columns,
  defaultSort,
  defaultOrder = "asc",
  loading = false,
}: EnhancedTableProps<T>) => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = useState<keyof T>(defaultSort);

  const handleRequestSort = (property: keyof T) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data
    .slice()
    .filter(getFilter<T>(columns, searchFilter))
    .sort(getComparator(order, orderBy));

  return (
    <>
      <Box sx={{ paddingX: 1, paddingBottom: 2 }}>
        {search && (
          <Box paddingY={2}>
            <TextField
              fullWidth
              placeholder="Search"
              InputProps={{
                role: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchFilter(e.target.value)
              }
            />
          </Box>
        )}
        <TableContainer>
          <Table>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              headCells={columns}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    sx={{ textAlign: "center" }}
                  >
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : filteredData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    sx={{ textAlign: "center" }}
                  >
                    No data
                  </TableCell>
                </TableRow>
              ) : (
                children(filteredData)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

EnhancedTable.defaultProps = {
  defaultOrder: "asc",
};
