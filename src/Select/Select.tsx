import Box, { type BoxProps } from "@mui/material/Box";
import CircularProgress, {
  type CircularProgressProps,
} from "@mui/material/CircularProgress";
import FormControl, { type FormControlProps } from "@mui/material/FormControl";
import InputLabel, { type InputLabelProps } from "@mui/material/InputLabel";
import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import MuiSelect, {
  type SelectProps as MuiSelectProps,
} from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { type JSXElementConstructor, type ReactNode, useId } from "react";

/**
 * Select input size variants
 */
export type SelectSize = "small" | "medium";

/**
 * Interface representing the slots for the Select component.
 */
export interface SelectSlots {
  /**
   * Root form control component
   */
  formControl?: JSXElementConstructor<FormControlProps>;
  /**
   * Input label component
   */
  inputLabel?: JSXElementConstructor<InputLabelProps>;
  /**
   * Select component
   */
  select?: JSXElementConstructor<MuiSelectProps<any>>;
  /**
   * Render value container component
   */
  renderValueContainer?: JSXElementConstructor<BoxProps>;
  /**
   * Loading indicator component (when fetching)
   */
  loadingIndicator?: JSXElementConstructor<CircularProgressProps>;
  /**
   * Fetching indicator component (when loading)
   */
  fetchingIndicator?: JSXElementConstructor<LinearProgressProps>;
}

/**
 * Interface representing the slot properties for the Select component.
 */
export interface SelectSlotProps {
  /**
   * Props for the form control
   */
  formControl?: Partial<FormControlProps>;
  /**
   * Props for the input label
   */
  inputLabel?: Partial<InputLabelProps>;
  /**
   * Props for the select (onChange is managed by the component)
   */
  select?: Partial<Omit<MuiSelectProps<any>, "onChange">>;
  /**
   * Props for the render value container
   */
  renderValueContainer?: Partial<BoxProps>;
  /**
   * Props for the loading indicator
   */
  loadingIndicator?: Partial<CircularProgressProps>;
  /**
   * Props for the fetching indicator
   */
  fetchingIndicator?: Partial<LinearProgressProps>;
}

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
  /**
   * Optional slots for custom rendering within the select
   */
  slots?: SelectSlots;
  /**
   * Optional props for the slots
   */
  slotProps?: SelectSlotProps;
}

const ProgressSize: Record<SelectSize, number> = {
  small: 15,
  medium: 20,
};

/**
 * A custom Select component that extends the functionality of the Material-UI Select component.
 * This component supports additional features such as loading and fetching states, custom colors, and full-width display.
 *
 * Supports extensive customization through slots and slotProps.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select label="Country" value={country} onChange={handleChange}>
 *   <MenuItem value="us">United States</MenuItem>
 *   <MenuItem value="uk">United Kingdom</MenuItem>
 * </Select>
 *
 * // With custom loading indicator
 * <Select
 *   label="Status"
 *   value={status}
 *   loading
 *   slotProps={{
 *     loadingIndicator: { size: 24 }
 *   }}
 * />
 * ```
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
  slots,
  slotProps,
}: SelectProps<T>) {
  const id = useId();

  // Slot components with defaults
  const FormControlComponent = slots?.formControl ?? FormControl;
  const InputLabelComponent = slots?.inputLabel ?? InputLabel;
  const SelectComponent = slots?.select ?? MuiSelect;
  const RenderValueContainerComponent = slots?.renderValueContainer ?? Box;
  const LoadingIndicatorComponent = slots?.loadingIndicator ?? CircularProgress;
  const FetchingIndicatorComponent = slots?.fetchingIndicator ?? LinearProgress;

  const renderValue = (value: T): ReactNode => {
    if (fetching) {
      return (
        <RenderValueContainerComponent
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={1}
          height={1}
          {...slotProps?.renderValueContainer}
        >
          <LoadingIndicatorComponent
            color="inherit"
            size={ProgressSize[size]}
            {...slotProps?.loadingIndicator}
          />
        </RenderValueContainerComponent>
      );
    }

    if (loading) {
      return (
        <RenderValueContainerComponent
          display="flex"
          flexDirection="column"
          {...slotProps?.renderValueContainer}
        >
          {value}
          <FetchingIndicatorComponent
            color="inherit"
            sx={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
            {...slotProps?.fetchingIndicator}
          />
        </RenderValueContainerComponent>
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
    <StyledFormControl fullWidth={fullWidth} {...slotProps?.formControl}>
      <InputLabelComponent id={id} {...slotProps?.inputLabel}>
        {label}
      </InputLabelComponent>
      <SelectComponent
        {...slotProps?.select}
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange as any}
        disabled={fetching}
        size={size}
        renderValue={renderValue}
      >
        {children}
      </SelectComponent>
    </StyledFormControl>
  );
}

export default Select;
