import React from "react";
import { TableSortLabel, TableRow, Box, TableCell, TableHead } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

export type Order = "asc" | "desc";
export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  sort: boolean;
}

interface Props {
  onRequestSort: (property: string) => void;
  order: Order;
  orderBy: string;
  headCells: HeadCell[];
}

export function EnhancedTableHead({ order, orderBy, headCells, onRequestSort }: Props) {
  const createSortHandler = (property: string) => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={String(headCell.id)}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
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
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
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
}
