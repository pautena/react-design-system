import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DialogContentText from "@mui/material/DialogContentText";
import { Variant } from "@mui/material/styles/createTypography";
import { ReactElement } from "react";
import { ActionHeader } from "./action-header";
import { ConfirmDialog } from "~/confirm-dialog";
import { useDialog } from "~/dialog";

export type ActionVariant = "primary" | "error" | "warning" | "success";

export interface ActionProps {
  variant: ActionVariant;
  title: string;
  titleVariant?: Extract<Variant, "h4" | "h5" | "h6">;
  description?: string | ReactElement;
  descriptionVariant?: Variant;
  helperText?: string;
  helperTextVariant?: Variant;
  buttonText: string;
  confirmable?: boolean;
  confirmTitle?: string;
  confirmDescription?: string;
  passphrase?: string;
  onAction: () => void;
}

export const Action = ({
  variant = "primary",
  title,
  titleVariant = "h4",
  description,
  descriptionVariant = "body2",
  buttonText,
  helperText,
  helperTextVariant = "caption",
  confirmable,
  passphrase,
  confirmTitle = "",
  confirmDescription = "",
  onAction,
}: ActionProps) => {
  const { isOpen, open, close } = useDialog();

  const handleClickActionButton = () => {
    if (confirmable) {
      open();
    } else {
      onAction();
    }
  };

  const handleConfirmDialog = () => {
    onAction();
    close;
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} mb={2}>
          <ActionHeader title={title} titleVariant={titleVariant} />
        </Grid>
        {description && (
          <Grid item xs={12}>
            <Typography variant={descriptionVariant}>{description}</Typography>
          </Grid>
        )}
        <Grid item xs={12} mt={1}>
          <Button color={variant} variant="contained" onClick={handleClickActionButton}>
            {buttonText}
          </Button>
        </Grid>
        {helperText && (
          <Grid item xs={12}>
            <Typography variant={helperTextVariant}>{helperText}</Typography>
          </Grid>
        )}
      </Grid>
      <ConfirmDialog
        open={isOpen}
        title={confirmTitle}
        passphrase={passphrase}
        onCancel={close}
        onConfirm={handleConfirmDialog}
      >
        <DialogContentText>{confirmDescription}</DialogContentText>
      </ConfirmDialog>
    </>
  );
};
