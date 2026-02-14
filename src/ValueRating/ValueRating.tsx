import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import type { BaseValueProps, EditableValueProps } from "../ValueBase";
import {
  useEditableValueDisplay,
  ValueEditButton,
  ValueEditButtons,
} from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueRating component
 *
 * @extends BaseValueProps
 * @extends EditableValueProps
 */
export type ValueRatingProps = BaseValueProps<number> & {
  /**
   * Maximum number of stars to display
   * @default 5
   */
  maxRating?: number;
} & EditableValueProps<number>;

/**
 * Displays a number using stars
 */
export function ValueRating({
  label,
  value = 0,
  maxRating = 5,
  editable,
  dense,
  onEdit = () => null,
}: ValueRatingProps) {
  const {
    isEditing,
    editValue,
    startEdit,
    cancelEdit,
    setEditValue,
    submitEdit,
  } = useEditableValueDisplay(value, onEdit);
  const id = getValueContentLabelId(label);

  return (
    <ValueContent label={label} tooltip={value.toString()} dense={dense}>
      <Box display="flex" alignItems="center" aria-labelledby={id}>
        <Rating
          readOnly={!isEditing}
          max={maxRating}
          size={dense ? "small" : "medium"}
          value={isEditing ? editValue : value}
          onChange={(e, newValue) => {
            if (Number.isNaN(newValue) && (e.currentTarget as any).value) {
              setEditValue(Number.parseInt((e.currentTarget as any).value, 10));
            } else if (newValue) {
              setEditValue(newValue);
            }
          }}
        />
        {editable && !isEditing && (
          <ValueEditButton dense={dense} onClick={startEdit} />
        )}
        {isEditing && (
          <ValueEditButtons
            onClickCancel={cancelEdit}
            onClickSubmit={submitEdit}
          />
        )}
      </Box>
    </ValueContent>
  );
}

export default ValueRating;
