import Button from "@mui/material/Button";
import DialogContentText from "@mui/material/DialogContentText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { Variant } from "@mui/material/styles/createTypography";
import type { ReactElement } from "react";
import { ConfirmDialog } from "../confirm-dialog";
import { useDialog } from "../dialog";
import { ActionHeader } from "./action-header";

export type ActionVariant = "primary" | "error" | "warning" | "success";

export interface ActionProps {
	/**
	 * The variant of the action.
	 */
	variant: ActionVariant;

	/**
	 * The title of the action.
	 */
	title: string;

	/**
	 * The variant of the title.
	 */
	titleVariant?: Extract<Variant, "h4" | "h5" | "h6">;

	/**
	 * The description of the action.
	 */
	description?: string | ReactElement;

	/**
	 * The variant of the description.
	 */
	descriptionVariant?: Variant;

	/**
	 * The helper text for the action.
	 */
	helperText?: string;

	/**
	 * The variant of the helper text.
	 */
	helperTextVariant?: Variant;

	/**
	 * The text for the action button.
	 */
	buttonText: string;

	/**
	 * Indicates if the action requires confirmation.
	 */
	confirmable?: boolean;

	/**
	 * The title for the confirmation dialog.
	 */
	confirmTitle?: string;

	/**
	 * The description for the confirmation dialog.
	 */
	confirmDescription?: string;

	/**
	 * The passphrase required to perform action.
	 */
	passphrase?: string;

	/**
	 * The callback function to be executed when the action is triggered.
	 */
	onAction: () => void;
}

/**
 * Renders an action button with a text that explains what it does.
 */
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
		close();
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
					<Button
						color={variant}
						variant="contained"
						onClick={handleClickActionButton}
					>
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
