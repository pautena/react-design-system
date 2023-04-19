import { GridProps, Grid, Box } from "@mui/material";
import React, { PropsWithChildren, FunctionComponent, ReactElement } from "react";
import { useGetDefaultThemeColor } from "~/utils";

export type ValueItemProps = PropsWithChildren<
  Omit<GridProps, "item" | "container"> & { bordered?: boolean }
>;
export type ValueItemComponent = FunctionComponent<ValueItemProps>;
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;

export const valueItemClasses = {
  root: "RdsValueItem-root",
};

export const ValueItem: ValueItemComponent = ({
  children,
  bordered = true,
  ...rest
}: ValueItemProps) => {
  const defaultColor = useGetDefaultThemeColor({ lightWeight: 200, darkWeight: 800 });

  return (
    <Grid item className={valueItemClasses.root} {...rest}>
      <Box px={1} borderLeft={bordered ? `solid ${defaultColor} 1px` : "none"}>
        {children}
      </Box>
    </Grid>
  );
};
