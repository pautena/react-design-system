import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useEditableValueDisplay, ValueEditButton, ValueEditButtons } from "../value-base";
import { BaseValueProps, EditableValueProps } from "../value-base";
import { getValueContentLabelId, ValueContent } from "../value-content";

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
  dense,
  onEdit = () => null,
}: ValueRatingProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(value, onEdit);
  const id = getValueContentLabelId(label);

  return (
    <ValueContent label={label} tooltip={value.toString()} dense={dense}>
      <Box display="flex" alignItems="center">
        <Rating
          aria-labelledby={id}
          readOnly={!isEditing}
          max={maxRating}
          size={dense ? "small" : "medium"}
          value={isEditing ? editValue : value}
          onChange={(e, newValue) => {
            if (Number.isNaN(newValue) && (e.currentTarget as any).value) {
              setEditValue(parseInt((e.currentTarget as any).value, 10));
            } else if (newValue) {
              setEditValue(newValue);
            }
          }}
        />
        {editable && !isEditing && <ValueEditButton dense={dense} onClick={startEdit} />}
        {isEditing && <ValueEditButtons onClickCancel={cancelEdit} onClickSubmit={submitEdit} />}
      </Box>
    </ValueContent>
  );
};
