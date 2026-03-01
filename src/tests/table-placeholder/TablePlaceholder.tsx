import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sampleData = [
  { id: 1, name: "Item A", status: "Active", date: "2024-01-15" },
  { id: 2, name: "Item B", status: "Pending", date: "2024-01-16" },
  { id: 3, name: "Item C", status: "Active", date: "2024-01-17" },
];

export const TablePlaceholder = () => (
  <Table className="border">
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {sampleData.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
