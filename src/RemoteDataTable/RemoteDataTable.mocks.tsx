import { Chip } from "@mui/material";
import type { QuerySpecField, RemoteDataTableColumn } from "./RemoteDataTable";

/**
 * Mock item type for testing and stories
 */
export type MockItem = {
  id: string;
  name: string;
  status: "Active" | "Inactive" | "Archived";
  createdAt: string;
};

/**
 * Basic columns for testing (no custom cell rendering)
 */
export const mockColumnsBasic: RemoteDataTableColumn<MockItem>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
  },
];

/**
 * Full-featured columns for stories (with sorting, custom cells, and widths)
 */
export const mockColumnsFull: RemoteDataTableColumn<MockItem>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    enableSorting: true,
    meta: { minWidth: 200 },
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    enableSorting: false,
    meta: { width: 140 },
    cell: (row) => (
      <Chip
        label={row.status}
        color={row.status === "Active" ? "success" : "default"}
        size="small"
      />
    ),
  },
  {
    id: "createdAt",
    header: "Created",
    accessorKey: "createdAt",
    enableSorting: true,
    meta: { width: 160 },
    cell: (row) => new Date(row.createdAt).toLocaleDateString(),
  },
];

/**
 * Query fields for filter builder
 */
export const mockQueryFields: QuerySpecField[] = [
  { name: "name", label: "Name", ops: ["eq", "ilike", "in"] },
  {
    name: "status",
    label: "Status",
    ops: ["eq", "neq", "in"],
    options: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
      { value: "Archived", label: "Archived" },
    ],
  },
  {
    name: "createdAt",
    label: "Created",
    type: "date",
    ops: ["eq", "gte", "lte"],
  },
  { name: "count", label: "Count", type: "number", ops: ["gte", "lte"] },
];

/**
 * Generates mock items for testing
 */
export const buildMockItems = (count: number): MockItem[] =>
  Array.from({ length: count }).map((_, index) => ({
    id: String(index + 1),
    name: `Item ${index + 1}`,
    status:
      index % 3 === 0 ? "Archived" : index % 2 === 0 ? "Active" : "Inactive",
    createdAt: new Date(2024, 0, index + 1).toISOString(),
  }));

/**
 * Default mock dataset (48 items)
 */
export const mockItems = buildMockItems(48);
