import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { EnhancedRemoteTable } from "./enhanced-remote-table";
import { HeadCell, Order } from "~/enhanced-table";
import { Data } from "~/enhanced-table/enhanced-table.mock";

export interface EnhancedRemoteDummyTableProps {
  data: Data[];
  loading: boolean;
  defaultSort: keyof Data;
  defaultOrder?: Order;
  columns: HeadCell<Data>[];
  onRequestSort: (col: string, orderBy: Order) => void;
}

export function EnhancedRemoteDummyTable(props: EnhancedRemoteDummyTableProps) {
  return (
    <EnhancedRemoteTable {...props}>
      {(d: Data) => (
        <TableRow key={d.id}>
          <TableCell>{d.name}</TableCell>
          <TableCell>{d.id}</TableCell>
          <TableCell>{d.startDate}</TableCell>
        </TableRow>
      )}
    </EnhancedRemoteTable>
  );
}
