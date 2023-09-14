import { Typography, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
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
  const editInputRef = useRef<HTMLInputElement>(null);
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(valueProp?.toString(), onEdit);
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  const editKeyPressListener = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onEdit((e.target as any).value);
    }
  };

  useEffect(() => {
    editInputRef.current?.addEventListener("keypress", editKeyPressListener);
    return () => editInputRef.current?.removeEventListener("keypress", editKeyPressListener);
  }, [editInputRef.current]);

  return (
    <ValueContent hideLabel={isEditing} label={label} tooltip={value} dense={dense}>
      {isEditing ? (
        <TextField
          inputRef={editInputRef}
          value={editValue}
          label={label}
          size="small"
          onChange={(e) => setEditValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <ValueEditButtons onClickCancel={cancelEdit} onClickSubmit={submitEdit} />
            ),
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