import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { type ReactNode, useState } from "react";
import {
  EnhancedTableHead,
  type HeadCell,
  type Order,
} from "../enhanced-table";

export interface EnhancedRemoteTableProps<T> {
  /**
   * The array of data to be displayed in the table.
   */
  data: T[];

  /**
   * Indicates whether the table is in a loading state.
   */
  loading: boolean;

  /**
   * The default column to sort by.
   */
  defaultSort: keyof T;

  /**
   * The default order of sorting (ascending or descending).
   */
  defaultOrder?: Order;

  /**
   * The columns configuration for the table.
   */
  columns: HeadCell<T>[];

  /**
   * A render function for each row of data.
   */
  children: (data: T, index: number) => ReactNode;

  /**
   * Callback function to handle sorting requests.
   */
  onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
}
export interface EnhancedRemoteTableProps<T> {
  data: T[];
  loading: boolean;
  defaultSort: keyof T;
  defaultOrder?: Order;
  columns: HeadCell<T>[];
  children: (data: T, index: number) => ReactNode;
  onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
}

/**
 * EnhancedRemoteTable component provides a table with remote data handling capabilities.
 * It supports sorting and displays a loading indicator while data is being fetched.
 */
export const EnhancedRemoteTable = <T,>({
  children,
  data,
  loading,
  columns,
  defaultSort,
  defaultOrder,
  onRequestSort,
}: EnhancedRemoteTableProps<T>) => {
  const [order, setOrder] = useState({
    orderBy: defaultSort,
    order: defaultOrder || "asc",
  });

  const handleRequestSort = (property: keyof T) => {
    setOrder(({ orderBy, order }) => {
      const newOrder = orderBy === property && order === "asc" ? "desc" : "asc";
      onRequestSort(property, newOrder);

      return {
        orderBy: property,
        order: newOrder,
      };
    });
  };

  return (
    <>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            order={order.order}
            orderBy={order.orderBy}
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
            ) : (
              data.map((d, i) => children(d, i))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
