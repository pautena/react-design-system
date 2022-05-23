import { ResourceEntry } from "../../features/user-resources/user-resources.types";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface Props {
  resourceEntries: ResourceEntry[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 200 },
  { field: "resource", headerName: "Resource", width: 200 },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.amount} (${params.row.increment})`,
  },
  { field: "category", headerName: "Category", width: 200 },
  { field: "subcategory", headerName: "Subcategory", width: 200 },
];

export const ResourcesHistoryTable = ({ resourceEntries }: Props) => {
  const rows = resourceEntries.map((entry,index)=> ({...entry,id:index}));

  return (
    <Box style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
      />
    </Box>
  );
};
