import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { type SxProps, type Theme, useTheme } from "@mui/material/styles";
import { useState } from "react";

/**
 * Props for the ValueEditButtons component
 */
export interface ValueEditButtonsProps {
  /**
   * Callback when cancel button is clicked
   */
  onClickCancel: () => void;
  /**
   * Callback when submit button is clicked
   */
  onClickSubmit: () => void;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

/**
 * Cancel and submit buttons for editable value components
 */
export function ValueEditButtons({
  onClickCancel,
  onClickSubmit,
  sx,
}: ValueEditButtonsProps) {
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
}

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

  return {
    isEditing,
    cancelEdit,
    editValue,
    setEditValue,
    startEdit,
    submitEdit,
  };
};

/**
 * Props for the ValueEditButton component
 */
export interface ValueEditButtonProps {
  /**
   * Whether to use dense spacing
   */
  dense?: boolean;
  /**
   * Click handler for edit button
   */
  onClick: () => void;
}

/**
 * Edit button for value components
 */
export function ValueEditButton({ dense, onClick }: ValueEditButtonProps) {
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
}
