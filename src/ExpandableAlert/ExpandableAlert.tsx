import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert, { type AlertColor, alertClasses } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import type { SxProps, Theme } from "@mui/material/styles";
import { forwardRef, type ReactElement, useState } from "react";
import Board from "../Board";

/**
 * Props for the ExpandableAlert component
 */
export interface ExpandableAlertProps {
  /**
   * Alert severity level
   */
  severity: AlertColor;
  /**
   * Custom icon mapping for different severity levels
   */
  iconMapping?: Partial<Record<AlertColor, React.ReactNode>>;
  /**
   * Alert title
   */
  title?: string;
  /**
   * Alert message content
   */
  message: string;
  /**
   * Additional metadata to display in expandable section
   */
  metadata?: string | string[];
  /**
   * Custom component to render in expandable section
   */
  metadataComponent?: ReactElement;
  /**
   * Callback when alert is closed
   */
  onClose: () => void;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

const alertSx = {
  [`& .${alertClasses.message}`]: {
    width: 1,
  },
};

/**
 * Alert component with expandable metadata section
 */
const ExpandableAlert = forwardRef<any, ExpandableAlertProps>(
  (
    {
      severity,
      iconMapping,
      title,
      message,
      metadata,
      metadataComponent,
      onClose,
      sx = {},
    },
    ref,
  ) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Alert
        ref={ref}
        severity={severity}
        iconMapping={iconMapping}
        onClose={onClose}
        action={
          <Box display="flex" flexDirection="column">
            <IconButton color="inherit" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
            {metadata && (
              <IconButton
                color="inherit"
                onClick={() => setExpanded((e) => !e)}
              >
                {expanded ? (
                  <ExpandLessIcon fontSize="small" />
                ) : (
                  <ExpandMoreIcon fontSize="small" />
                )}
              </IconButton>
            )}
          </Box>
        }
        sx={{ ...alertSx, ...sx }}
      >
        <Box sx={{ w: 1 }}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {message}
          {metadata && (
            <Collapse in={expanded} sx={{ mt: 2 }}>
              <Board content={metadata}>{metadataComponent}</Board>
            </Collapse>
          )}
        </Box>
      </Alert>
    );
  },
);

ExpandableAlert.displayName = "ExpandableAlert";

export default ExpandableAlert;
