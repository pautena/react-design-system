import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Variant } from "@mui/material/styles/createTypography";

type ActionVariant = "primary" | "error" | "warning" | "success";

export interface ActionHeaderProps {
  variant?: ActionVariant;
  title: string;
  titleVariant?: Extract<Variant, "h4" | "h5" | "h6">;
}

export const ActionHeader = ({
  title,
  titleVariant = "h4",
  variant = "primary",
}: ActionHeaderProps) => {
  const { palette } = useTheme();

  const titleColor: Record<ActionVariant, string | undefined> = {
    primary: undefined,
    error: "error",
    warning: palette.warning.main,
    success: palette.success.main,
  };
  return (
    <Typography
      color={titleColor[variant]}
      variant={titleVariant}
      pb={1}
      borderBottom={1}
      borderColor="grey.300"
    >
      {title}
    </Typography>
  );
};
