import React from "react";
import { ReactNode, useState } from "react";
import {
  TableContainer,
  TableBody,
  Table,
  TableRow,
  CircularProgress,
  TableCell,
} from "@mui/material";
import { EnhancedTableHead, HeadCell, Order } from "../enhanced-table";

export interface EnhancedRemoteTableProps<T> {
  data: T[];
  loading: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  columns: HeadCell[];
  children: (data: T, index: number) => ReactNode;
  onRequestSort: (col: string, orderBy: "asc" | "desc") => void;
}

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

  const handleRequestSort = (property: string) => {
    setOrder((prevState) => {
      const newOrder = prevState.orderBy === property && prevState.order === "asc" ? "desc" : "asc";
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
                <TableCell colSpan={columns.length} sx={{ textAlign: "center" }}>
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
