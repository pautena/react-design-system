import { IconButton, TextField, Typography, inputBaseClasses } from "@mui/material";
import React from "react";
import {
  BaseValueProps,
  DefaultPlaceholder,
  EditableValueProps,
  getEditTextFieldSx,
  useEditableValueDisplay,
  ValueEditButton,
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
  dense,
  onEdit = () => null,
}: ValueTextProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(valueProp?.toString(), onEdit);
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  return (
    <ValueContent label={label} tooltip={value} dense={dense}>
      {isEditing ? (
        <TextField
          value={editValue}
          size="small"
          onChange={(e) => setEditValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <ValueEditButtons
                dense={dense}
                onClickCancel={cancelEdit}
                onSubmitEdit={submitEdit}
              />
            ),
          }}
          sx={getEditTextFieldSx(dense)}
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
