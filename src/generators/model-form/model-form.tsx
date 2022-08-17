import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useGetDefaultThemeColor } from "../../utils/theme";
import { Model, ModelField, ModelInstance } from "../generators.model";

export interface ModelFormProps {
  model: Model;
  initialValues?: ModelInstance;
  saveButtonText: string;
  onSubmit: (values: ModelInstance) => void;
}

export const ModelForm = ({
  model,
  saveButtonText,
  onSubmit,
  initialValues = {},
}: ModelFormProps) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: ChangeEvent<any>, key: string | undefined) => {
    e.preventDefault();

    e.target;

    setValues((v) => {
      const n: Record<string, object> = {};
      if (key) {
        n[key] = {
          ...v[key],
          [e.target.name]: e.target.value,
        };
      } else {
        n[e.target.name] = e.target.value;
      }

      return { ...v, ...n };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  const renderField = (field: ModelField, key: string | undefined = undefined) => {
    const defaultColor = useGetDefaultThemeColor({ lightWeight: 200, darkWeight: 800 });

    const { id, type, name, description, xs, sm, md, lg, xl } = field;
    if (type === "group") {
      return (
        <Grid item key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <Paper>
            <Box bgcolor={defaultColor} px={2} py={1} mb={2}>
              <Typography variant="h6" role="heading" aria-level={1}>
                {name}
              </Typography>
              <Typography variant="body2" role="heading" aria-level={2}>
                {description}
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ p: 2 }}>
              {field.value.map((f) => renderField(f, id))}
            </Grid>
          </Paper>
        </Grid>
      );
    }

    return (
      <Grid item key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <TextField
          required
          type={type}
          label={name}
          name={id}
          variant="outlined"
          fullWidth
          value={key && key in values ? values[key][id] : values[id]}
          onChange={(e) => handleInputChange(e, key)}
        />
      </Grid>
    );
  };

  return (
    <Grid container component="form" spacing={2} onSubmit={handleSubmit}>
      {model.fields.map((f) => renderField(f))}
      <Grid item xs={12}>
        <Button type="submit" variant="contained">
          {saveButtonText}
        </Button>
      </Grid>
    </Grid>
  );
};
