import React from "react";
import { Grid } from "@mui/material";
import {
  GroupValueCard,
  GroupValueItem,
  ValueBoolean,
  ValueCard,
  ValueText,
  ValueDatetime,
} from "../../components";
import { ModelField, GroupField, Model, BasicModelInstance } from "../generators.model";

const singleDetailValueFactory = <T extends BasicModelInstance>(field: ModelField, instance: T) => {
  const { id, name, type } = field;
  const value = instance[id];
  if (type === "boolean") {
    return <ValueBoolean label={name} value={value} />;
  } else if (type === "date" || type === "time" || type === "datetime") {
    return <ValueDatetime label={name} value={value} format={field.format} />;
  }
  return <ValueText label={name} value={value?.toString()} />;
};

interface ObjectDetailGroupProps<T extends BasicModelInstance> {
  field: GroupField;
  instance: T;
}

const ObjectDetailGroup = <T extends BasicModelInstance>({
  field: { name, description, value },
  instance,
}: ObjectDetailGroupProps<T>) => {
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

export interface ObjectDetailsProps<T extends BasicModelInstance> {
  model: Model;
  instance: T;
}

export const ObjectDetails = <T extends BasicModelInstance>({
  model,
  instance,
}: ObjectDetailsProps<T>) => {
  return (
    <Grid container spacing={2}>
      {model.fields.map((field) => {
        const { id, type, xs = 3, sm, md, lg, xl } = field;

        if (type === "group") {
          return (
            <Grid item key={id} xs={12}>
              <ObjectDetailGroup field={field} instance={instance[id]} />
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
