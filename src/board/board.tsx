import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { type SxProps, type Theme, useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren, ReactNode } from "react";

/**
 * Props for the Board component.
 */
export type BoardProps = PropsWithChildren<{
  /**
   * The content to be displayed on the board. It can be a single string or an array of strings.
   */
  content: string | string[];
  /**
   * Optional spacing value for the board. It can be one of the values: 0, 1, 2, 3, 4, or 5.
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Optional styling properties for the board, using the theme's styling system.
   */
  sx?: SxProps<Theme>;
}>;

/**
 * Board component that displays content within a styled Paper component.
 * It supports rendering an array of content lines or a single content string.
 * Additionally, it provides a button to copy the content to the clipboard.
 */
export const Board = ({
  content: contentProp,
  spacing = 0,
  children,
  sx,
}: BoardProps) => {
  const { spacing: themeSpacing, typography } = useTheme();
  let copyContent: string;
  let content: ReactNode;

  if (Array.isArray(contentProp)) {
    content = contentProp.map((line, i) => (
      <Typography key={i} sx={{ pb: spacing }}>
        {line}
      </Typography>
    ));
    copyContent = contentProp.join("\n");
  } else {
    content = <Typography>{contentProp}</Typography>;
    copyContent = contentProp || "";
  }

  return (
    <Paper
      sx={{
        position: "relative",
        pl: 2,
        pr: 4,
        py: 1,
        backgroundColor: blueGrey[800],
        color: "white",
        ...sx,
      }}
    >
      <Box display="flex" flexDirection="row">
        <Box width={1}>{children || content}</Box>
        <Box
          sx={{
            position: "absolute",
            top: themeSpacing(0.5),
            right: themeSpacing(0.5),
          }}
        >
          {copyContent && (
            <IconButton
              aria-label="copy board content"
              color="inherit"
              onClick={() => navigator.clipboard.writeText(copyContent)}
            >
              <Tooltip title="Copy">
                <ContentCopyIcon sx={{ fontSize: typography.pxToRem(18) }} />
              </Tooltip>
            </IconButton>
          )}
        </Box>
      </Box>
    </Paper>
  );
};
