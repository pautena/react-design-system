import React from "react";
import { Grid } from "@mui/material";
import { ValueCard, ValueText } from "../../components";

export type DetailValue = {
  field: string;
  type: string;
  description: string;
  name: string;
  value: any;
};

export interface ObjectDetailsProps {
  details: DetailValue[];
}

export const ObjectDetails = ({ details }: ObjectDetailsProps) => {
  return (
    <Grid container spacing={2}>
      {details.map(({ field, name, value }) => (
        <Grid item key={field} sm={3}>
          <ValueCard>
            <ValueText label={name} value={value?.toString()} />
          </ValueCard>
        </Grid>
      ))}
    </Grid>
  );
};
