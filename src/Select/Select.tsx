import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress from "@mui/material/LinearProgress";
import MuiSelect, {
  type SelectProps as MuiSelectProps,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { type ReactNode, useId } from "react";

/**
 * Select input size variants
 */
export type SelectSize = "small" | "medium";

/**
 * Props for the Select component
 *
 * @template T - The type of the selected value
 */
export interface SelectProps<T> {
  /**
   * The label for the select input.
   */
  label: string;
  /**
   * The selected value.
   */
  value: T;
  /**
   * If true, the select input is in a loading state.
   */
  loading?: boolean;
  /**
   * If true, the select input is in a fetching state.
   */
  fetching?: boolean;
  /**
   * The size of the select input.
   */
  size?: SelectSize;
  /**
   * The color of the select input.
   */
  color?: string;
  /**
   * If true, the select input takes up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The child elements to be rendered within the select input.
   */
  children?: ReactNode;
  /**
   * The callback function to handle changes to the select input.
   */
  onChange?: MuiSelectProps<T>["onChange"];
}

const ProgressSize: Record<SelectSize, number> = {
  small: 15,
  medium: 20,
};

/**
 * A custom Select component that extends the functionality of the Material-UI Select component.
 * This component supports additional features such as loading and fetching states, custom colors, and full-width display.
 */
export function Select<T extends ReactNode>({
  label,
  value,
  loading = false,
  fetching = false,
  size = "medium",
  fullWidth = false,
  color,
  children,
  onChange,
}: SelectProps<T>) {
  const id = useId();

  const renderValue = (value: T): ReactNode => {
    if (fetching) {
      return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={1}
          height={1}
        >
          <CircularProgress color="inherit" size={ProgressSize[size]} />
        </Box>
      );
    }

    if (loading) {
      return (
        <Box display="flex" flexDirection="column">
          {value}
          <LinearProgress
            color="inherit"
            sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
          />
        </Box>
      );
    }

    return value;
  };

  const StyledFormControl = styled(FormControl)(() => {
    if (!color) {
      return {};
    }

    return {
      label: {
        color,
      },
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: `${color} !important`,
      },
      ".MuiInputBase-root": {
        color,
      },
      ".MuiSelect-icon": {
        fill: color,
      },
    };
  });

  return (
    <StyledFormControl fullWidth={fullWidth}>
      <InputLabel id={id}>{label}</InputLabel>
      <MuiSelect
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        disabled={fetching}
        size={size}
        renderValue={renderValue}
      >
        {children}
      </MuiSelect>
    </StyledFormControl>
  );
}

export default Select;
