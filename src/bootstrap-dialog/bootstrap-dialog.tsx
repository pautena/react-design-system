import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { BootstrapDialogDialogProps } from "../dialog/dialog.types";

/**
 * A customizable dialog component. Use it as a base to create more dialogs
 */
export const BootstrapDialog = ({
  open,
  title,
  component,
  componentProps = {},
  disabled,
  disableAccept,
  disableCancel,
  actions = [],
  children,
  loading,
  cancelable,
  callCloseWhenCancel = true,
  acceptable,
  acceptText = "Accept",
  cancelText = "Cancel",
  onAccept,
  onCancel = () => null,
  onClose,
  acceptType = "button",
}: BootstrapDialogDialogProps) => {
  const hasActions = actions.length > 0 || acceptable || cancelable;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        {title}
        {loading && !acceptable && (
          <CircularProgress size={20} sx={{ ml: 2, color: (theme) => theme.palette.grey[500] }} />
        )}
        <IconButton
          disabled={disabled}
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box component={component} {...componentProps}>
        <DialogContent dividers>{children}</DialogContent>
        {hasActions && (
          <DialogActions>
            {actions.map(({ id, text, type = "button", onClick, color = "primary" }) => (
              <Button key={id} type={type} disabled={disabled} onClick={onClick} color={color}>
                {text}
              </Button>
            ))}
            {cancelable && (
              <Button
                color="error"
                disabled={disabled || disableCancel}
                onClick={() => {
                  onCancel();
                  if (callCloseWhenCancel) {
                    onClose();
                  }
                }}
              >
                {cancelText}
              </Button>
            )}

            {acceptable && (
              <Button
                type={acceptType}
                loading={loading}
                disabled={disabled || disableAccept}
                onClick={onAccept}
              >
                {acceptText}
              </Button>
            )}
          </DialogActions>
        )}
      </Box>
    </Dialog>
  );
};
