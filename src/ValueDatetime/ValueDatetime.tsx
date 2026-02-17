import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { type BaseValueProps, DefaultPlaceholder } from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueDatetime component
 */
export interface ValueDatetimeProps extends BaseValueProps<Date> {
  /**
   * Datetime format
   */
  format: string;
}

/**
 * Displays a formated datetime with a label
 */
export function ValueDatetime({
  label,
  value: valueProp,
  format: fmt,
  placeholder = DefaultPlaceholder,
  dense,
}: ValueDatetimeProps) {
  const id = getValueContentLabelId(label);
  const value = (valueProp && format(valueProp, fmt)) || placeholder;

  return (
    <ValueContent
      label={label}
      tooltip={value}
      dense={dense}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box display="flex" alignItems="center" aria-labelledby={id}>
        <Typography variant={dense ? "body1" : "h5"} noWrap>
          {value}
        </Typography>
      </Box>
    </ValueContent>
  );
}

export default ValueDatetime;
