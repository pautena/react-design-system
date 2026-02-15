import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import type { BootstrapDialogDialogProps } from "../Dialog/Dialog.types";

/**
 * A customizable dialog component. Use it as a base to create more dialogs
 *
 * Supports extensive customization through slots and slotProps.
 * Each internal element can be customized or replaced.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <BootstrapDialog
 *   open={true}
 *   title="Confirm Action"
 *   onClose={handleClose}
 *   acceptable
 *   cancelable
 * >
 *   Are you sure?
 * </BootstrapDialog>
 *
 * // Custom close button
 * <BootstrapDialog
 *   title="Settings"
 *   slotProps={{
 *     closeButton: { color: 'error' }
 *   }}
 * />
 * ```
 */
export function BootstrapDialog({
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
  slots,
  slotProps,
}: BootstrapDialogDialogProps) {
  const hasActions = actions.length > 0 || acceptable || cancelable;

  // Slot components with defaults
  const DialogComponent = slots?.dialog ?? Dialog;
  const DialogTitleComponent = slots?.dialogTitle ?? DialogTitle;
  const TitleContainerComponent = slots?.titleContainer ?? Box;
  const LoadingIndicatorComponent = slots?.loadingIndicator ?? CircularProgress;
  const CloseButtonComponent = slots?.closeButton ?? IconButton;
  const CloseIconComponent = slots?.closeIcon ?? CloseIcon;
  const ContentWrapperComponent = slots?.contentWrapper ?? Box;
  const DialogContentComponent = slots?.dialogContent ?? DialogContent;
  const DialogActionsComponent = slots?.dialogActions ?? DialogActions;
  const ActionButtonComponent = slots?.actionButton ?? Button;
  const CancelButtonComponent = slots?.cancelButton ?? Button;
  const AcceptButtonComponent = slots?.acceptButton ?? Button;

  return (
    <DialogComponent open={open} onClose={onClose} {...slotProps?.dialog}>
      <DialogTitleComponent
        sx={{ display: "flex", alignItems: "center" }}
        {...slotProps?.dialogTitle}
      >
        <TitleContainerComponent {...slotProps?.titleContainer}>
          {title}
          {loading && !acceptable && (
            <LoadingIndicatorComponent
              size={20}
              sx={{ ml: 2, color: (theme) => theme.palette.grey[500] }}
              {...slotProps?.loadingIndicator}
            />
          )}
        </TitleContainerComponent>
        <CloseButtonComponent
          disabled={disabled}
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          {...slotProps?.closeButton}
        >
          <CloseIconComponent />
        </CloseButtonComponent>
      </DialogTitleComponent>
      <ContentWrapperComponent
        component={component}
        {...componentProps}
        {...slotProps?.contentWrapper}
      >
        <DialogContentComponent dividers {...slotProps?.dialogContent}>
          {children}
        </DialogContentComponent>
        {hasActions && (
          <DialogActionsComponent {...slotProps?.dialogActions}>
            {actions.map(
              ({ id, text, type = "button", onClick, color = "primary" }) => (
                <ActionButtonComponent
                  key={id}
                  type={type}
                  disabled={disabled}
                  onClick={onClick}
                  color={color}
                  {...slotProps?.actionButton}
                >
                  {text}
                </ActionButtonComponent>
              ),
            )}
            {cancelable && (
              <CancelButtonComponent
                color="error"
                disabled={disabled || disableCancel}
                onClick={() => {
                  onCancel();
                  if (callCloseWhenCancel) {
                    onClose();
                  }
                }}
                {...slotProps?.cancelButton}
              >
                {cancelText}
              </CancelButtonComponent>
            )}

            {acceptable && (
              <AcceptButtonComponent
                type={acceptType}
                loading={loading}
                disabled={disabled || disableAccept}
                onClick={onAccept}
                {...slotProps?.acceptButton}
              >
                {acceptText}
              </AcceptButtonComponent>
            )}
          </DialogActionsComponent>
        )}
      </ContentWrapperComponent>
    </DialogComponent>
  );
}

export default BootstrapDialog;
