import React from "react";
import { Grid, styled } from "@mui/material";
import {
  GroupValueCard,
  ValueItem,
  ValueBoolean,
  ValueText,
  ValueDatetime,
  valueItemClasses,
} from "../../components";
import {
  ModelField,
  GroupField,
  Model,
  BasicModelInstance,
  GroupInstanceType,
} from "../generators.model";

interface SingleDetailValueFactoryOptions {
  dense?: boolean;
}

const singleDetailValueFactory = <T extends BasicModelInstance>(
  field: ModelField,
  instance: T | GroupInstanceType,
  { dense }: SingleDetailValueFactoryOptions = {},
) => {
  const { id, name, type } = field;
  const value = instance[id];
  if (type === "boolean") {
    return <ValueBoolean dense={dense} label={name} value={value as boolean} />;
  } else if (type === "date" || type === "time" || type === "datetime") {
    return <ValueDatetime dense={dense} label={name} value={value as Date} format={field.format} />;
  }
  return <ValueText dense={dense} label={name} value={value?.toString()} />;
};

interface ObjectDetailGroupProps {
  field: GroupField;
  instance: GroupInstanceType;
  dense?: boolean;
}

const ObjectDetailGroup = ({
  field: { name, description, value },
  instance,
  dense,
}: ObjectDetailGroupProps) => {
  return (
    <GroupValueCard title={name} subtitle={description} dense={dense}>
      {value.map((field) => {
        const { id, xs, sm, md, lg, xl } = field;
        return (
          <ValueItem key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {singleDetailValueFactory(field, instance, { dense })}
          </ValueItem>
        );
      })}
    </GroupValueCard>
  );
};

export interface ObjectDetailsProps<T extends BasicModelInstance> {
  model: Model;
  dense?: boolean;
  instance: T;
}

export const ObjectDetails = <T extends BasicModelInstance>({
  model,
  instance,
  dense,
}: ObjectDetailsProps<T>) => {
  return (
    <Grid container spacing={dense ? 1 : 2}>
      {model.fields.map((field) => {
        const { id, type, xs = 3, sm, md, lg, xl } = field;

        if (type === "group") {
          return (
            <Grid item key={id} xs={12}>
              <ObjectDetailGroup
                field={field}
                instance={instance[id] as GroupInstanceType}
                dense={dense}
              />
            </Grid>
          );
        }

        return (
          <ValueItem key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {singleDetailValueFactory(field, instance, { dense })}
          </ValueItem>
        );
      })}
    </Grid>
  );
};
