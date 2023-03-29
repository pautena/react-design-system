import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { BaseValueProps, DefaultPlaceholder } from "../value-displays.types";
import { getValueContentLabelId, ValueContent } from "../value-content";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

export type TextValue = string | number;

export interface ValueTextProps<T extends TextValue> extends BaseValueProps<T> {
  /**
   * This field can be edited or not
   */
  editable?: boolean;

  /**
   * Callback executed when the value is edited
   */
  onEdit?: (value?: string) => void;

  /**
   * Callback called when the user cancels an edition
   */
  onCancelEdit?: () => void;
}

/**
 * Displays a string value with a label
 */
export const ValueText = <T extends TextValue>({
  label,
  value: valueProp,
  placeholder = DefaultPlaceholder,
  editable,
  onEdit = () => null,
  onCancelEdit = () => null,
}: ValueTextProps<T>) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState<string | undefined>(valueProp?.toString());
  const id = getValueContentLabelId(label);
  const value = valueProp?.toString() || placeholder;

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(valueProp?.toString());
    onCancelEdit();
  };

  const handleEdit = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

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
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  startIcon={<ClearIcon />}
                  onClick={handleCancelEdit}
                  sx={{ paddingRight: 0, minWidth: 0, marginRight: 1 }}
                />
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  startIcon={<CheckIcon />}
                  onClick={handleEdit}
                  sx={{ paddingRight: 0, minWidth: 0 }}
                />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <Typography variant="h5" noWrap aria-labelledby={id}>
          {value}
          {editable && (
            <IconButton size="small" onClick={() => setIsEditing(true)} sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          )}
        </Typography>
      )}
    </ValueContent>
  );
};
