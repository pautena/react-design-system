import React from "react";
import { Grid } from "@mui/material";
import {
  GroupValueCard,
  GroupValueItem,
  ValueBoolean,
  ValueCard,
  ValueText,
} from "../../components";
import { DetailValue, GroupValue } from "./object-details.types";

const singleDetailValueFactory = ({ name, type, value }: DetailValue) => {
  if (type === "boolean") {
    return <ValueBoolean label={name} value={value} />;
  }
  return <ValueText label={name} value={value?.toString()} />;
};

interface ObjectDetailGroupProps {
  detail: GroupValue;
}

const ObjectDetailGroup = ({ detail: { name, description, value } }: ObjectDetailGroupProps) => {
  return (
    <GroupValueCard title={name} subtitle={description}>
      {value.map(({ field, xs, sm, md, lg, xl, ...rest }) => (
        <GroupValueItem key={field} xs={xs} sm={sm} md={md} lg={lg} xl={lg}>
          {singleDetailValueFactory(rest)}
        </GroupValueItem>
      ))}
    </GroupValueCard>
  );
};

export interface ObjectDetailsProps {
  details: DetailValue[];
}

export const ObjectDetails = ({ details }: ObjectDetailsProps) => {
  return (
    <Grid container spacing={2}>
      {details.map((detail) => {
        const { field, type, xs = 3, sm, md, lg, xl } = detail;

        if (type === "group") {
          return (
            <Grid item key={field} xs={12}>
              <ObjectDetailGroup detail={detail} />
            </Grid>
          );
        }

        return (
          <Grid item key={field} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <ValueCard>{singleDetailValueFactory(detail)}</ValueCard>
          </Grid>
        );
      })}
    </Grid>
  );
};
