import { Button, Grid } from "@mui/material";
import React, { FormEvent, useMemo } from "react";
import { useState } from "react";
import {
  Model,
  BasicModelInstance,
  FieldType,
  newInstanceFromValuesOrZeroValue,
} from "../generators/generators.model";
import { ModelFormField } from "./model-form-field";
import { assocPath } from "ramda";

export interface ModelFormProps<T extends BasicModelInstance> {
  model: Model;
  dense?: boolean;
  initialValues?: T;
  saveButtonText: string;
  onSubmit: (values: T) => void;
}

export const ModelForm = <T extends BasicModelInstance>({
  model,
  saveButtonText,
  dense,
  onSubmit,
  initialValues,
}: ModelFormProps<T>) => {
  const valuesInitialState = useMemo(
    () => newInstanceFromValuesOrZeroValue<T>(model, initialValues),
    [model, initialValues],
  );
  const [values, setValues] = useState<T>(valuesInitialState);

  const setKeyValue = (path: string[], value: FieldType | null) => {
    setValues((v) => assocPath(path, value, v));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Grid container component="form" spacing={2} onSubmit={handleSubmit}>
      {model.fields.map((f) => (
        <ModelFormField
          key={f.id}
          dense={dense}
          field={f}
          value={values[f.id]}
          update={!!initialValues}
          onChangeValue={setKeyValue}
        />
      ))}
      <Grid item xs={12}>
        <Button type="submit" variant="contained" size={dense ? "small" : "medium"}>
          {saveButtonText}
        </Button>
      </Grid>
    </Grid>
  );
};
