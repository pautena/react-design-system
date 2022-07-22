import React from "react";
import {Grid} from '@mui/material';
import { ValueCardText } from "../../components";

export type DetailValue = {
  field: string;
  type: string;
  description: string;
  name: string;
  value: any;
}


export interface ObjectDetailsProps {
  details: DetailValue[];
}

export const ObjectDetails = ({details}:ObjectDetailsProps) => {
  return (
    <Grid container spacing={2}>
      {details.map(({field,name,value})=>(
        <Grid item key={field} sm={3}>
          <ValueCardText label={name} value={value?.toString()}/>
        </Grid>
      ))}
    </Grid>
  );
};
