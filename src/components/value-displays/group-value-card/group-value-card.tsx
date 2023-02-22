import { Grid, Paper, GridProps, Box, Typography } from "@mui/material";
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { useGetDefaultThemeColor } from "../../../utils/theme";

export type GroupValueItemProps = PropsWithChildren<
  Omit<GridProps, "item" | "container"> & { bordered?: boolean }
>;
export type GroupValueItemComponent = FunctionComponent<GroupValueItemProps>;
export type GroupValueItemElement = ReactElement<GroupValueItemProps, GroupValueItemComponent>;

export const groupValueItemClasses = {
  root: "RdsGroupValueItem-root",
};

export const GroupValueItem: GroupValueItemComponent = ({
  children,
  bordered = true,
  ...rest
}: GroupValueItemProps) => {
  const defaultColor = useGetDefaultThemeColor({ lightWeight: 200, darkWeight: 800 });

  return (
    <Grid item className={groupValueItemClasses.root} {...rest}>
      <Box
        px={1}
        sx={{
          borderLeft: bordered ? `solid ${defaultColor} 1px` : "none",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export interface GroupValueCardProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children: GroupValueItemElement | GroupValueItemElement[];
}

export const GroupValueCard = ({ title, subtitle, centered, children }: GroupValueCardProps) => {
  const defaultColor = useGetDefaultThemeColor({ lightWeight: 200, darkWeight: 800 });

  return (
    <Paper
      sx={{
        paddingBottom: 1,
      }}
    >
      <Box bgcolor={defaultColor} px={2} py={1}>
        <Typography variant="h6" role="heading" aria-level={1}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" role="heading" aria-level={2}>
            {subtitle}
          </Typography>
        )}
      </Box>
      <Grid
        container
        padding={1}
        rowSpacing={2}
        justifyContent={centered ? "center" : "flex-start"}
      >
        {children}
      </Grid>
    </Paper>
  );
};
