import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { BaseValueProps, DefaultPlaceholder, EditableValueProps } from "~/value-base";
import { getValueContentLabelId, ValueContent } from "~/value-content";
import { useEditableValueDisplay, ValueEditButton, ValueEditButtons } from "~/value-base";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export type EditInputType = "datetime" | "date" | "time";

export interface ValueDatetimeProps extends BaseValueProps<Date>, EditableValueProps<Date> {
  /**
   * Datetime format
   */
  format: string;

  /**
   * Edit input type
   */
  editInputType?: EditInputType;
}

/**
 * Displays a formated datetime with a label
 */
export const ValueDatetime = ({
  label,
  value: valueProp,
  format: fmt,
  placeholder = DefaultPlaceholder,
  editable,
  editInputType = "datetime",
  dense,
  onEdit = () => null,
}: ValueDatetimeProps) => {
  const { isEditing, editValue, startEdit, cancelEdit, setEditValue, submitEdit } =
    useEditableValueDisplay(valueProp, onEdit);
  const id = getValueContentLabelId(label);
  const value = (valueProp && format(valueProp, fmt)) || placeholder;

  const EditPickerComponent =
    editInputType === "datetime"
      ? DateTimePicker
      : editInputType === "time"
      ? TimePicker
      : DatePicker;

  return (
    <ValueContent
      label={label}
      hideLabel={isEditing}
      tooltip={value}
      dense={dense}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {isEditing ? (
        <EditPickerComponent
          value={editValue}
          format={fmt}
          label={label}
          onChange={(newValue) => setEditValue(newValue ? newValue : undefined)}
          slots={{
            textField: (params) => (
              <TextField
                {...params}
                size="small"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {params.InputProps?.endAdornment}
                      <ValueEditButtons
                        onClickCancel={cancelEdit}
                        onClickSubmit={submitEdit}
                        sx={{ ml: 2 }}
                      />
                    </>
                  ),
                  sx: { marginY: !dense ? 1 : 0.2 },
                }}
              />
            ),
          }}
        />
      ) : (
        <Box display="flex" alignItems="center">
          <Typography variant={dense ? "body1" : "h5"} noWrap aria-labelledby={id}>
            {value}
          </Typography>
          {editable && <ValueEditButton dense={dense} onClick={startEdit} />}
        </Box>
      )}
    </ValueContent>
  );
};
