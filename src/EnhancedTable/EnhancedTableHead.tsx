import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

/**
 * Sort order direction
 */
export type Order = "asc" | "desc";

/**
 * Configuration for a table column header
 *
 * @template T - The type of data being displayed in the table
 */
export interface HeadCell<T> {
  /**
   * Whether to disable cell padding
   */
  disablePadding: boolean;
  /**
   * Column identifier matching data property
   */
  id: keyof T;
  /**
   * Display label for the column
   */
  label: string;
  /**
   * Whether the column contains numeric data
   */
  numeric: boolean;
  /**
   * Whether sorting is enabled for this column
   */
  sort: boolean;
}

/**
 * Props for the EnhancedTableHead component
 *
 * @template T - The type of data being displayed in the table
 */
interface EnhancedTableHeadProps<T> {
  /**
   * Callback when a column sort is requested
   * @param property - Column identifier to sort by
   */
  onRequestSort: (property: keyof T) => void;
  /**
   * Current sort order
   */
  order: Order;
  /**
   * Column currently being sorted by
   */
  orderBy: keyof T;
  /**
   * Column configuration array
   */
  headCells: HeadCell<T>[];
}

/**
 * Table header with sortable columns
 */
export const EnhancedTableHead = <T,>({
  order,
  orderBy,
  headCells,
  onRequestSort,
}: EnhancedTableHeadProps<T>) => {
  const createSortHandler = (property: keyof T) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            variant="head"
            key={String(headCell.id)}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: "bold" }}
          >
            {headCell.sort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
