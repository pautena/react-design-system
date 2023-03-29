import { IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import {
  BaseValueProps,
  DefaultPlaceholder,
  EditableValueProps,
  useEditableValueDisplay,
  ValueEditButtons,
} from "../value-base";
import { getValueContentLabelId, ValueContent } from "../value-content";
import EditIcon from "@mui/icons-material/Edit";

export type ValueTextProps = BaseValueProps<string | number> & EditableValueProps<string>;

/**
 * Displays a string value with a label
 */
export const ValueText = ({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  editable,
  onEdit = () => null,
}: ValueTextProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(valueProp?.toString(), onEdit);
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  return (
    <ValueContent label={label} tooltip={value}>
      {isEditing ? (
        <TextField
          value={editValue}
          size="small"
          onChange={(e) => setEditValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ValueEditButtons onClickCancel={cancelEdit} onSubmitEdit={submitEdit} />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <Typography variant="h5" noWrap aria-labelledby={id}>
          {value}
          {editable && (
            <IconButton size="small" onClick={startEdit} sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          )}
        </Typography>
      )}
    </ValueContent>
  );
};
