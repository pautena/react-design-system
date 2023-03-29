import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";

export interface ValueEditButtonsProps {
  onClickCancel: () => void;
  onSubmitEdit: () => void;
}

export const ValueEditButtons = ({ onClickCancel, onSubmitEdit }: ValueEditButtonsProps) => {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="error"
        startIcon={<ClearIcon />}
        onClick={onClickCancel}
        sx={{ paddingRight: 0, minWidth: 0, marginRight: 1 }}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        startIcon={<CheckIcon />}
        onClick={onSubmitEdit}
        sx={{ paddingRight: 0, minWidth: 0 }}
      />
    </>
  );
};

/**
 * Hook to manage the editing behaviour
 */
export const useEditableValueDisplay = <T,>(
  initialValue: T | undefined,
  onEdit: (value?: T) => void,
) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState<T | undefined>(initialValue);

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue(initialValue);
  };
  const startEdit = () => {
    setIsEditing(true);
  };

  const submitEdit = () => {
    onEdit(editValue);
    cancelEdit();
  };

  return { isEditing, cancelEdit, editValue, setEditValue, startEdit, submitEdit };
};
