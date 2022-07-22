import React from "react";
import { Grid } from "@mui/material";
import { ValueBoolean, ValueCard, ValueText } from "../../components";
import { DetailValue } from "./object-details.types";

export interface ObjectDetailsProps {
  details: DetailValue[];
}

export const ObjectDetails = ({ details }: ObjectDetailsProps) => {
  return (
    <Grid container spacing={2}>
      {details.map(({ field, name, type, value, xs = 3, sm, md, lg, xl }) => (
        <Grid item key={field} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <ValueCard>
            {type === "boolean" ? (
              <ValueBoolean label={name} value={value} />
            ) : (
              <ValueText label={name} value={value?.toString()} />
            )}
          </ValueCard>
        </Grid>
      ))}
    </Grid>
  );
};
