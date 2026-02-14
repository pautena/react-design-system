import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useGetDefaultThemeColor } from "../utils";
import type { ValueItemElement } from "../ValueItem";

/**
 * Props for the GroupValueCard component.
 */
export interface GroupValueCardProps {
  /**
   * The main title of the card.
   */
  title: string;

  /**
   * An optional subtitle for the card.
   */
  subtitle?: string;

  /**
   * If true, the content will be centered.
   */
  centered?: boolean;

  /**
   * The children elements to be rendered inside the card.
   */
  children: ValueItemElement | ValueItemElement[];

  /**
   * If true, the card will have a denser layout.
   */
  dense?: boolean;
}

/**
 * GroupValueCard component renders a card with a title, subtitle, and children content.
 * It supports customization for dense layout and centered content.
 */
export function GroupValueCard({
  title,
  subtitle,
  centered,
  children,
  dense,
}: GroupValueCardProps) {
  const { typography } = useTheme();
  const defaultColor = useGetDefaultThemeColor({
    lightWeight: 200,
    darkWeight: 800,
  });

  return (
    <Paper
      sx={{
        paddingBottom: dense ? 0 : 1,
      }}
    >
      <Box
        bgcolor={defaultColor}
        px={dense ? 1 : 2}
        py={dense ? 0.5 : 1}
        lineHeight={dense ? 0 : undefined}
      >
        <Typography
          variant={dense ? "body1" : "h6"}
          role="heading"
          aria-level={1}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant={dense ? "caption" : "body2"}
            role="heading"
            aria-level={2}
            lineHeight={dense ? typography.pxToRem(15) : undefined}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      <Grid
        container
        padding={1}
        rowSpacing={dense ? 1 : 2}
        justifyContent={centered ? "center" : "flex-start"}
      >
        {children}
      </Grid>
    </Paper>
  );
}

export default GroupValueCard;
