import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, ReactElement } from "react";
import { useState } from "react";
import { useGetDefaultThemeColor } from "../../utils/theme";
import { Model, ModelField, BasicModelInstance, ModelFieldTypes } from "../generators.model";

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

  const setKeyValue = (name: string, key: string | undefined, value: any) => {
    setValues((v) => {
      const n: Record<string, object> = {};
      if (key) {
        n[key] = {
          ...v[key],
          [name]: value,
        };
      } else {
        n[name] = value;
      }

      return { ...v, ...n };
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<any>, key: string | undefined) => {
    e.preventDefault();
    setKeyValue(e.target.name, key, e.target.checked);
  };

  const handleSelectChange = (e: SelectChangeEvent<any>, key: string | undefined) => {
    e.preventDefault();
    setKeyValue(e.target.name, key, e.target.value);
  };

  const handleInputChange = (
    e: ChangeEvent<any>,
    key: string | undefined,
    type: ModelFieldTypes,
  ) => {
    e.preventDefault();

    let value = e.target.value;
    if (type === "number") {
      value = parseInt(e.target.value);
    }
    setKeyValue(e.target.name, key, value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  const renderField = (field: ModelField, key: string | undefined = undefined) => {
    const defaultColor = useGetDefaultThemeColor({ lightWeight: 200, darkWeight: 800 });

    const { id, type, name, description, xs, sm, md, lg, xl } = field;

    let fieldInput: ReactElement;
    const value = key && key in values ? values[key][id] : values[id];
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
        <Box sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox name={id} onChange={(e) => handleCheckboxChange(e, key)} checked={value} />
            }
            label={name}
          />
        </Box>
      );
    } else if (type === "enum") {
      fieldInput = (
        <FormControl fullWidth>
          <InputLabel id={`${id}-select-label`}>{name}</InputLabel>
          <Select
            labelId={`${id}-select-label`}
            id={`${id}-simple-select`}
            value={value}
            label={name}
            name={id}
            onChange={(e) => handleSelectChange(e, key)}
            required
          >
            {field.value.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
          value={value}
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
