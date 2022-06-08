import { Deploy, Grpc, MainLibrary, Project, ProjectStatus, RepoStatus, Users } from "app/base-api";
import React from "react";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Chip } from "@mui/material";

const projectStatuses = Object.keys(ProjectStatus);
const repoStatuses = Object.keys(RepoStatus);
const libraries = Object.keys(MainLibrary);
const users = Object.keys(Users);
const grpcs = Object.keys(Grpc);
const deploys = Object.keys(Deploy);

type Variant = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
const StatusChipColor: Record<ProjectStatus, Variant> = {
  Worldlaunched: "success",
  Development: "primary",
  TBKilledKissflowWIP: "warning",
  TBKilled: "error",
  Killed: "error",
};

interface Props {
  loading: boolean;
  projects: Project[];
}

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
  },
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "codeName",
    headerName: "Code",
  },
  {
    field: "studio",
    headerName: "Studio",
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: ({ value }) => (
      <Chip label={value} size="small" color={StatusChipColor[value as ProjectStatus]} />
    ),
  },
  {
    field: "repository",
    headerName: "Repository",
  },
  {
    field: "configRepo",
    headerName: "Config repository",
  },
  {
    field: "repoStatus",
    headerName: "Repository status",
  },
  {
    field: "mainLibrary",
    headerName: "Main library",
  },
  {
    field: "configManager",
    headerName: "Config manager",
  },
  {
    field: "grpc",
    headerName: "GRPC",
  },
  {
    field: "deploy",
    headerName: "Deploy",
  },
  {
    field: "sprocket",
    headerName: "SP Rocket",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams<any, Project>) => params.row.services.sprocket
    },
  {
    field: "sqs",
    headerName: "SQS",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) => params.row.services.sqs,
  },
  {
    field: "tournaments",
    headerName: "Tournaments",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.services.tournaments,
  },
  {
    field: "hermes",
    headerName: "Hermes",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) => params.row.services.hermes,
  },
  {
    field: "leaderboard",
    headerName: "Leaderboard",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.services.leaderboard,
  },
  {
    field: "friends",
    headerName: "Friends",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.services.friends,
  },
  {
    field: "presence",
    headerName: "Presence",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.services.presence,
  },
  {
    field: "teams",
    headerName: "Teams",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) => params.row.services.teams,
  },
  {
    field: "groups",
    headerName: "Groups",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) => params.row.services.groups,
  },
  {
    field: "auth",
    headerName: "Auth",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) => params.row.services.auth,
  },
  {
    field: "devCharts",
    headerName: "Dev Charts",
    type: "boolean",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.services.devCharts,
  },
  {
    field: "notes",
    headerName: "Notes",
  },
];

export const ProjectsList = ({ projects, loading }: Props) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        loading={loading}
        rows={projects}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
