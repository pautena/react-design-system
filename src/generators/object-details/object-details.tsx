import React from "react";
import { Grid } from "@mui/material";
import {
  GroupValueCard,
  GroupValueItem,
  ValueBoolean,
  ValueCard,
  ValueText,
} from "../../components";
import { ModelField, GroupField, Model } from "../generators.model";

const singleDetailValueFactory = ({ id, name, type }: ModelField, instance: object) => {
  const value = instance[id];
  if (type === "boolean") {
    return <ValueBoolean label={name} value={value} />;
  }
  return <ValueText label={name} value={value?.toString()} />;
};

interface ObjectDetailGroupProps {
  detail: GroupField;
  instance: object;
}

const ObjectDetailGroup = ({
  detail: { name, description, value },
  instance,
}: ObjectDetailGroupProps) => {
  return (
    <GroupValueCard title={name} subtitle={description}>
      {value.map((field) => {
        const { id, xs, sm, md, lg, xl } = field;
        return (
          <GroupValueItem key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {singleDetailValueFactory(field, instance)}
          </GroupValueItem>
        );
      })}
    </GroupValueCard>
  );
};

export interface ObjectDetailsProps {
  model: Model;
  instance: object;
}

export const ObjectDetails = ({ model, instance }: ObjectDetailsProps) => {
  return (
    <Grid container spacing={2}>
      {model.fields.map((field) => {
        const { id, type, xs = 3, sm, md, lg, xl } = field;

        if (type === "group") {
          return (
            <Grid item key={id} xs={12}>
              <ObjectDetailGroup detail={field} instance={instance[id]} />
            </Grid>
          );
        }

        return (
          <Grid item key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <ValueCard>{singleDetailValueFactory(field, instance)}</ValueCard>
          </Grid>
        );
      })}
    </Grid>
  );
};