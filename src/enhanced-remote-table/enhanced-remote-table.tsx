import { ReactNode, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import TableCell from "@mui/material/TableCell";
import { EnhancedTableHead, HeadCell, Order } from "../enhanced-table";

export interface EnhancedRemoteTableProps<T> {
  data: T[];
  loading: boolean;
  defaultSort: keyof T;
  defaultOrder?: Order;
  columns: HeadCell<T>[];
  children: (data: T, index: number) => ReactNode;
  onRequestSort: (col: keyof T, orderBy: "asc" | "desc") => void;
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
