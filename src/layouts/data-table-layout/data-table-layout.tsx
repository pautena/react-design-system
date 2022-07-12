import React from "react";
import { HeaderProps, Placeholder, PlaceholderProps } from "../../components";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { HeaderLayout } from "../header-layout";

interface Props {
  loading?: boolean;
  headerProps: HeaderProps;
  emptyPlaceholderProps: PlaceholderProps;
  dataGridProps: DataGridProps & { height: number };
}

export const DataTableLayout = ({
  loading,
  headerProps,
  emptyPlaceholderProps,
  dataGridProps: { height, rows, ...restDataGridProps },
}: Props) => {
  const isEmpty = rows.length === 0;

  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      {!isEmpty ? (
        <DataGrid rows={rows} {...restDataGridProps} sx={{ height }} />
      ) : (
        <Placeholder {...emptyPlaceholderProps} />
      )}
    </HeaderLayout>
  );
};
