import React from "react";
import { Grid } from "@mui/material";
import {
  GroupValueCard,
  ValueItem,
  ValueBoolean,
  ValueCard,
  ValueText,
  ValueDatetime,
} from "../../components";
import {
  ModelField,
  GroupField,
  Model,
  BasicModelInstance,
  GroupInstanceType,
} from "../generators.model";

const singleDetailValueFactory = <T extends BasicModelInstance>(
  field: ModelField,
  instance: T | GroupInstanceType,
) => {
  const { id, name, type } = field;
  const value = instance[id];
  if (type === "boolean") {
    return <ValueBoolean label={name} value={value as boolean} />;
  } else if (type === "date" || type === "time" || type === "datetime") {
    return <ValueDatetime label={name} value={value as Date} format={field.format} />;
  }
  return <ValueText label={name} value={value?.toString()} />;
};

interface ObjectDetailGroupProps {
  field: GroupField;
  instance: GroupInstanceType;
}

const ObjectDetailGroup = ({
  field: { name, description, value },
  instance,
}: ObjectDetailGroupProps) => {
  return (
    <GroupValueCard title={name} subtitle={description}>
      {value.map((field) => {
        const { id, xs, sm, md, lg, xl } = field;
        return (
          <ValueItem key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {singleDetailValueFactory(field, instance)}
          </ValueItem>
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
              <ObjectDetailGroup field={field} instance={instance[id] as GroupInstanceType} />
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
