import Alert, { alertClasses, AlertColor } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import AlertTitle from "@mui/material/AlertTitle";
import { SxProps, Theme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import { forwardRef, ReactElement, useState } from "react";
import { Board } from "../board";

export interface ExpandableAlertProps {
  severity: AlertColor;
  iconMapping?: Partial<Record<AlertColor, React.ReactNode>>;
  title?: string;
  message: string;
  metadata?: string | string[];
  metadataComponent?: ReactElement;
  onClose: () => void;
  sx?: SxProps<Theme>;
}

const alertSx = {
  [`& .${alertClasses.message}`]: {
    width: 1,
  },
};

export const ExpandableAlert = forwardRef<any, ExpandableAlertProps>(
  (
    { severity, iconMapping, title, message, metadata, metadataComponent, onClose, sx = {} },
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
              <IconButton color="inherit" onClick={() => setExpanded((e) => !e)}>
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
