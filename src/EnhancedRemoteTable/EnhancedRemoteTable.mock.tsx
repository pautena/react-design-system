import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { HeadCell, Order } from "../EnhancedTable";
import type { Data } from "../EnhancedTable/EnhancedTable.mock";
import { EnhancedRemoteTable } from "./EnhancedRemoteTable";

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
