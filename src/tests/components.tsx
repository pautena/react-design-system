import React, { PropsWithChildren } from "react";
import { Typography, Container, Skeleton, Grid, Box } from "@mui/material";
import { loremIpsum } from "lorem-ipsum";
import { newArrayWithSize } from "../utils";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid } from "@mui/x-data-grid";

export const Placeholder = () => {
  return (
    <Typography variant="body1">
      {loremIpsum({
        count: 3,
        units: "paragraph",
      })}
    </Typography>
  );
};

export interface SkeletonCardProps {
  width?: number | string;
  animation?: "pulse" | "wave" | false;
}

export const SkeletonCard = ({ width = "100%", animation = false }: SkeletonCardProps) => {
  return (
    <Box width={width}>
      <Skeleton animation={animation} variant="rectangular" height={118} />
      <Skeleton animation={animation} variant="rectangular" height={16} sx={{ my: 1 }} />
      <Skeleton animation={animation} variant="rectangular" width="80%" height={16} />
    </Box>
  );
};

interface SkeletonGridProps {
  size?: number;
}

export const SkeletonGrid = ({ size = 20 }: SkeletonGridProps) => {
  return (
    <Grid container spacing={2}>
      {newArrayWithSize(size, 0).map((_, i) => (
        <Grid item key={i} xs={4}>
          <SkeletonCard width={1} />
        </Grid>
      ))}
    </Grid>
  );
};

type ContentPlaceholderProps = PropsWithChildren<{
  size?: number;
  p?: number;
}>;

export const ContentPlaceholder = ({ size = 20, children, p }: ContentPlaceholderProps) => {
  return (
    <Container component="main" sx={{ p }} data-testid="content-placeholder-test">
      {children}
      <SkeletonGrid size={size} />
    </Container>
  );
};

export interface DatatablePlaceholderProps {
  rowLength?: number;
  maxColumns?: number;
}

export const DatatablePlaceholder = ({
  rowLength = 1000,
  maxColumns = 10,
}: DatatablePlaceholderProps) => {
  const {
    data: { rows, columns },
  } = useDemoData({
    dataSet: "Commodity",
    rowLength,
    maxColumns,
  });

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};
