import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton, InputAdornment, SxProps, Theme, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export interface ValueEditButtonsProps {
  onClickCancel: () => void;
  onClickSubmit: () => void;
  sx?: SxProps<Theme>;
}

export const ValueEditButtons = ({ onClickCancel, onClickSubmit, sx }: ValueEditButtonsProps) => {
  return (
    <InputAdornment position="end" sx={sx}>
      <Button
        variant="contained"
        size="small"
        color="error"
        aria-label="cancel button"
        startIcon={<ClearIcon sx={{ fontSize: 12 }} />}
        onClick={onClickCancel}
        sx={{ paddingRight: 0, minWidth: 0, marginRight: 1 }}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        aria-label="submit button"
        startIcon={<CheckIcon sx={{ fontSize: 12 }} />}
        onClick={onClickSubmit}
        sx={{ paddingRight: 0, minWidth: 0 }}
      />
    </InputAdornment>
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

export interface ValueEditButtonProps {
  dense?: boolean;
  onClick: () => void;
}

export const ValueEditButton = ({ dense, onClick }: ValueEditButtonProps) => {
  const { typography } = useTheme();
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{ ml: dense ? 0.5 : 1 }}
      aria-label="edit button"
    >
      <EditIcon sx={{ fontSize: typography.pxToRem(dense ? 18 : 24) }} />
    </IconButton>
  );
};
