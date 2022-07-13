/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ReactNode, useState } from "react";
import {
  Box,
  TableContainer,
  TextField,
  TableBody,
  InputAdornment,
  Table,
  CircularProgress,
  TableCell,
  TableRow,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import { EnhancedTableHead, HeadCell, Order } from "./enhanced-table-head";

function getFilter<T>(columns: HeadCell[], search: string) {
  return (d: T) => {
    return (
      !search ||
      columns.some((col) => {
        let value = (d as any)[col.id];
        if (value?.toLowerCase) {
          value = value.toLowerCase();
        }
        return value?.toString().includes(search.toLowerCase());
      })
    );
  };
}

function getComparator(order: Order, orderBy: any): (a: any, b: any) => number {
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

interface Props<T> {
  readonly data: T[];
  search?: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  loading?: boolean;
  columns: HeadCell[];
  children: (data: T[]) => ReactNode;
}

export const EnhancedTable = <T,>({
  children,
  data,
  search,
  columns,
  defaultSort,
  defaultOrder = "asc",
  loading = false,
}: Props<T>) => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = useState(defaultSort);

  const handleRequestSort = (property: string) => {
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
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchFilter(e.target.value)}
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
                  <TableCell colSpan={columns.length} sx={{ textAlign: "center" }}>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} sx={{ textAlign: "center" }}>
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
