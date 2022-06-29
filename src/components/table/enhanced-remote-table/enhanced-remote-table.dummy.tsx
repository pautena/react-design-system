import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { EnhancedRemoteTable } from "./enhanced-remote-table";
import { HeadCell, Order } from "../enhanced-table/enhanced-table-head";

interface DummyProps<T> {
  data: T[];
  loading: boolean;
  defaultSort: string;
  defaultOrder?: Order;
  columns: HeadCell[];
  onRequestSort: (col: string, orderBy: Order) => void;
}

export function EnhancedRemoteDummyTable<T>(props: DummyProps<T>) {
  return (
    <EnhancedRemoteTable {...props}>
      {(d: any) => (
        <TableRow key={d.id}>
          <TableCell>{d.name}</TableCell>
          <TableCell>{d.id}</TableCell>
          <TableCell>{d.startDate}</TableCell>
        </TableRow>
      )}
    </EnhancedRemoteTable>
  );
}
