import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  DateTimePicker,
  DesktopDatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import type { ChangeEvent, ReactElement } from "react";
import type {
  ArrayFieldType,
  FieldType,
  ModelField,
  ModelFieldTypes,
} from "../generators/generators.model";
import { GroupValueCard } from "../group-value-card";

export interface ModelFormField {
  field: ModelField;
  update: boolean;
  dense?: boolean;
  path?: string[];
  value: any;
  onChangeValue: (path: string[], value: any) => void;
}

export const ModelFormField = ({
  field,
  path = [],
  value,
  dense,
  update,
  onChangeValue,
}: ModelFormField) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChangeValue([...path, e.target.name], e.target.checked);
  };

  const handleSelectChange = (e: SelectChangeEvent<FieldType>) => {
    e.preventDefault();
    onChangeValue([...path, e.target.name], e.target.value);
  };

  const handleMultiSelectChange = (e: SelectChangeEvent<FieldType>) => {
    e.preventDefault();
    const { value } = e.target;
    const newValue = typeof value === "string" ? value.split(",") : value;
    onChangeValue([...path, e.target.name], newValue);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: ModelFieldTypes,
  ) => {
    e.preventDefault();

    let value: string | number | string[] | number[] = e.target.value;
    if (type === "number" && typeof value === "string") {
      value = Number.parseInt(e.target.value, 10);
    } else if (type.includes("[]")) {
      value = e.target.value.split(",");
    }
    onChangeValue([...path, e.target.name], value);
  };

  const handleDateChange = (value: FieldType | null, id: string) => {
    onChangeValue([...path, id], value);
  };

  const {
    id,
    type,
    name,
    description,
    updatable = true,
    required = true,
    xs,
    sm,
    md,
    lg,
    xl,
  } = field;
  const disabled: boolean = !updatable && update;

  let fieldInput: ReactElement;
  const size = dense ? "small" : "medium";
  if (type === "group") {
    fieldInput = (
      <GroupValueCard title={name} subtitle={description} dense={dense}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {field.value.map((f) => (
            <ModelFormField
              key={f.id}
              field={f}
              dense={dense}
              path={[...path, id]}
              value={value[f.id]}
              update={update}
              onChangeValue={onChangeValue}
            />
          ))}
        </Grid>
      </GroupValueCard>
    );
  } else if (type === "boolean") {
    fieldInput = (
      <Box sx={{ height: 1, display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={
            <Checkbox
              name={id}
              size={size}
              onChange={handleCheckboxChange}
              checked={value as boolean}
              disabled={disabled}
            />
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
          id={`${id}-select`}
          value={value}
          label={name}
          name={id}
          size={size}
          onChange={handleSelectChange}
          required={required}
          disabled={disabled}
        >
          {field.value.map((fieldValue) => (
            <MenuItem key={fieldValue} value={fieldValue}>
              {fieldValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else if (type === "multienum") {
    fieldInput = (
      <FormControl fullWidth>
        <InputLabel id={`${id}-select-label`}>{name}</InputLabel>
        <Select
          labelId={`${id}-select-label`}
          id={`${id}-select`}
          value={value || []}
          renderValue={(selected) => (selected as ArrayFieldType).join(", ")}
          label={name}
          name={id}
          size={size}
          onChange={handleMultiSelectChange}
          required={required}
          disabled={disabled}
          multiple
        >
          {field.value.map((fieldValue) => (
            <MenuItem key={fieldValue} value={fieldValue}>
              <Checkbox
                checked={((value as any[]) || []).includes(fieldValue)}
              />
              <ListItemText primary={fieldValue} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else if (type === "date") {
    fieldInput = (
      <DesktopDatePicker
        enableAccessibleFieldDOMStructure={false}
        label={name}
        format={field.format}
        value={value}
        slotProps={
          {
            field: {
              size,
            },
          } as any
        }
        disabled={disabled}
        onChange={(value) => handleDateChange(value, id)}
      />
    );
  } else if (type === "time") {
    fieldInput = (
      <TimePicker
        enableAccessibleFieldDOMStructure={false}
        label={name}
        format={field.format}
        value={value}
        slotProps={
          {
            field: {
              size,
            },
          } as any
        }
        disabled={disabled}
        onChange={(value) => handleDateChange(value, id)}
      />
    );
  } else if (type === "datetime") {
    fieldInput = (
      <DateTimePicker
        enableAccessibleFieldDOMStructure={false}
        label={name}
        format={field.format}
        value={value}
        slotProps={
          {
            field: {
              size,
            },
          } as any
        }
        disabled={disabled}
        onChange={(value) => handleDateChange(value, id)}
      />
    );
  } else if (type === "group[]") {
    return null;
  } else if (type.includes("[]")) {
    fieldInput = (
      <TextField
        required={required}
        type="text"
        label={name}
        name={id}
        size={size}
        variant="outlined"
        helperText="Use comas to separate multiple values"
        fullWidth
        disabled={disabled}
        value={(value as any[]).join(",")}
        onChange={(e) => handleInputChange(e, type)}
      />
    );
  } else {
    fieldInput = (
      <TextField
        required={required}
        type={type}
        label={name}
        size={size}
        name={id}
        variant="outlined"
        fullWidth
        value={value}
        disabled={disabled}
        onChange={(e) => handleInputChange(e, type)}
      />
    );
  }

  return (
    <Grid key={id} size={{ xs, sm, md, lg, xl }}>
      {fieldInput}
    </Grid>
  );
};
