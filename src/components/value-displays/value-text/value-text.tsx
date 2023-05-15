import { TextField, Typography } from "@mui/material";
import React from "react";
import {
  BaseValueProps,
  DefaultPlaceholder,
  EditableValueProps,
  useEditableValueDisplay,
  ValueEditButton,
  ValueEditButtons,
} from "../value-base";
import { getValueContentLabelId, ValueContent } from "../value-content";

export type ValueTextProps = BaseValueProps<string | number> & EditableValueProps<string>;

/**
 * Displays a string value with a label
 */
export const ValueText = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  editable,
  dense,
  onEdit = () => null,
}: ValueTextProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(valueProp?.toString(), onEdit);
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  return (
    <ValueContent hideLabel={isEditing} label={label} tooltip={value} dense={dense}>
      {isEditing ? (
        <TextField
          value={editValue}
          label={label}
          size="small"
          onChange={(e) => setEditValue(e.target.value)}
          InputProps={{
            endAdornment: <ValueEditButtons onClickCancel={cancelEdit} onSubmitEdit={submitEdit} />,
          }}
          sx={{ marginY: !dense ? 1 : 0 }}
        />
      ) : (
        <Typography variant={dense ? "body1" : "h5"} noWrap aria-labelledby={id}>
          {value}
          {editable && <ValueEditButton dense={dense} onClick={startEdit} />}
        </Typography>
      )}
    </ValueContent>
  );
};
