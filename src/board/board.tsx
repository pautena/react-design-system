import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme, SxProps, Theme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { PropsWithChildren, ReactNode } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export type BoardProps = PropsWithChildren<{
  content: string | string[];
  spacing?: 0 | 1 | 2 | 3 | 4 | 5;
  sx?: SxProps<Theme>;
}>;

export const Board = ({ content: contentProp, spacing = 0, children, sx }: BoardProps) => {
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
        <Box sx={{ position: "absolute", top: themeSpacing(0.5), right: themeSpacing(0.5) }}>
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
