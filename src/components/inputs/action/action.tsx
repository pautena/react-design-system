import { Grid, Button, Typography, useTheme, DialogContentText } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React, { ReactElement } from "react";
import { ConfirmDialog, useDialog } from "~/components/dialogs";

export type ActionVariant = "primary" | "error" | "warning" | "success";

export interface ActionProps {
  variant: ActionVariant;
  title: string;
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
  const { palette } = useTheme();

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

  const titleColor: Record<ActionVariant, string | undefined> = {
    primary: undefined,
    error: "error",
    warning: palette.warning.main,
    success: palette.success.main,
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} mb={2}>
          <Typography
            color={titleColor[variant]}
            variant="h4"
            pb={1}
            borderBottom={1}
            borderColor="grey.300"
          >
            {title}
          </Typography>
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
