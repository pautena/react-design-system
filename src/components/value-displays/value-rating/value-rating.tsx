import { Box, IconButton, InputAdornment, Rating } from "@mui/material";
import React from "react";
import { useEditableValueDisplay, ValueEditButtons } from "../value-base";
import { BaseValueProps, EditableValueProps } from "../value-base/value-displays.types";
import { getValueContentLabelId, ValueContent } from "../value-content";
import EditIcon from "@mui/icons-material/Edit";

export type ValueRatingProps = BaseValueProps<number> & {
  maxRating?: number;
} & EditableValueProps<number>;

/**
 * Displays a number using stars
 */
export const ValueRating = ({
  label,
  value = 0,
  maxRating = 5,
  editable,
  onEdit = () => null,
}: ValueRatingProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(value, onEdit);
  const id = getValueContentLabelId(label);

  return (
    <ValueContent label={label} tooltip={value.toString()}>
      <Box display="flex" alignItems="center">
        <Rating
          aria-labelledby={id}
          readOnly={!isEditing}
          max={maxRating}
          value={isEditing ? editValue : value}
          onChange={(_, newValue) => setEditValue(newValue!)}
        />
        {editable && !isEditing && (
          <IconButton size="small" onClick={startEdit} sx={{ ml: 1 }}>
            <EditIcon />
          </IconButton>
        )}
        {isEditing && <ValueEditButtons onClickCancel={cancelEdit} onSubmitEdit={submitEdit} />}
      </Box>
    </ValueContent>
  );
};