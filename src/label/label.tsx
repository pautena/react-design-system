import Box from "@mui/material/Box";
import { SxProps, Theme, useTheme } from "@mui/material/styles";

export type LabelVariant =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "warning"
  | "error"
  | "success";

export const labelClasses = {
  root: "RdsLabel-root",
};

export interface LabelProps {
  /**
   * Content of the component
   */
  text: string;
  /**
   * Color palette used to draw the component
   */
  variant?: LabelVariant;

  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;

  /**
   * Show the text as uppercase
   */
  textTransform?: "none" | "capitalize" | "uppercase";
}

/**
 * Compact element to represent a text
 */
export const Label = ({
  text,
  variant = "default",
  textTransform = "capitalize",
  sx,
}: LabelProps) => {
  const { palette, typography } = useTheme();

  const backgroundColor: Record<LabelVariant, string> = {
    default: palette.mode === "light" ? palette.grey[100] : palette.grey[900],
    primary: palette.primary.light,
    secondary: palette.secondary.light,
    info: palette.info.light,
    warning: palette.warning.light,
    error: palette.error.light,
    success: palette.success.light,
  };

  const textColor: Record<LabelVariant, string> = {
    default: palette.getContrastText(backgroundColor.default),
    primary: palette.primary.contrastText,
    secondary: palette.secondary.contrastText,
    info: palette.info.contrastText,
    warning: palette.warning.contrastText,
    error: palette.error.contrastText,
    success: palette.success.contrastText,
  };

  return (
    <Box
      height={24}
      minWidth={22}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={backgroundColor[variant]}
      color={textColor[variant]}
      fontSize={typography.caption.fontSize}
      fontWeight={typography.fontWeightBold}
      lineHeight={0}
      textTransform={textTransform}
      whiteSpace="nowrap"
      borderRadius={2}
      role="label"
      aria-label={`${text} ${variant} label`}
      py={0}
      px={1}
      sx={{ cursor: "default", ...sx }}
    >
      {text}
    </Box>
  );
};
