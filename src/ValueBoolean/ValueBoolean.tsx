import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { type BaseValueProps, DefaultPlaceholder } from "../ValueBase";
import ValueContent, { getValueContentLabelId } from "../ValueContent";

/**
 * Props for the ValueBoolean component
 *
 * @extends BaseValueProps
 */
export type ValueBooleanProps = BaseValueProps<boolean>;

/**
 * Displays a boolean value with a label
 */
export function ValueBoolean({
  label,
  value,
  placeholder = DefaultPlaceholder,
  dense,
}: ValueBooleanProps) {
  const id = getValueContentLabelId(label);
  const { typography } = useTheme();

  const iconSx = {
    fontSize: dense ? typography.h6.fontSize : typography.h5.fontSize,
  };

  return (
    <ValueContent label={label} dense={dense}>
      <Box
        display="flex"
        alignItems="center"
        aria-labelledby={id}
        role="checkbox"
        aria-checked={value}
      >
        {value === undefined ? (
          <Typography variant="h5">{placeholder}</Typography>
        ) : value ? (
          <CheckIcon color="success" sx={iconSx} />
        ) : (
          <CloseIcon color="error" sx={iconSx} />
        )}
      </Box>
    </ValueContent>
  );
}

export default ValueBoolean;
