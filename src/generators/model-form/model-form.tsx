import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, ReactElement } from "react";
import { useState } from "react";
import { useGetDefaultThemeColor } from "../../utils/theme";
import { Model, ModelField, BasicModelInstance } from "../generators.model";

export interface ModelFormProps<T extends BasicModelInstance> {
  model: Model;
  initialValues?: T;
  saveButtonText: string;
  onSubmit: (values: T) => void;
}

export const ModelForm = <T extends BasicModelInstance>({
  model,
  saveButtonText,
  onSubmit,
  initialValues,
}: ModelFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues || ({} as T));

  const handleInputChange = (
    e: ChangeEvent<any>,
    key: string | undefined,
    type: "string" | "number" | "boolean",
  ) => {
    e.preventDefault();

    let value = e.target.value;
    if (type === "boolean") {
      value = e.target.checked;
    } else if (type === "number") {
      value = parseInt(e.target.value);
    }

    setValues((v) => {
      const n: Record<string, object> = {};
      if (key) {
        n[key] = {
          ...v[key],
          [e.target.name]: value,
        };
      } else {
        n[e.target.name] = value;
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

    let fieldInput: ReactElement;
    if (type === "group") {
      fieldInput = (
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
      );
    } else if (type === "boolean") {
      fieldInput = (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name={id}
                onChange={(e) => handleInputChange(e, key, type)}
                checked={key && key in values ? values[key][id] : values[id]}
              />
            }
            label={name}
          />
        </FormGroup>
      );
    } else {
      fieldInput = (
        <TextField
          required
          type={type}
          label={name}
          name={id}
          variant="outlined"
          fullWidth
          value={key && key in values ? values[key][id] : values[id]}
          onChange={(e) => handleInputChange(e, key, type)}
        />
      );
    }

    return (
      <Grid item key={id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        {fieldInput}
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
