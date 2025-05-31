import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { type SxProps, type Theme, useTheme } from "@mui/material/styles";

export type LinkCardVariant =
	| "primary"
	| "secondary"
	| "info"
	| "warning"
	| "error";
export interface LinkCardProps {
	variant?: LinkCardVariant;
	href: string;
	title: string;
	message: string;
	linkText?: string;
	sx?: SxProps<Theme>;
}

export const LinkCard = ({
	variant = "primary",
	title,
	message,
	href,
	linkText,
	sx,
}: LinkCardProps) => {
	const { palette } = useTheme();

	const rootSx: SxProps<Theme> = {
		p: 3,
		display: "flex",
		flexDirection: "column",
		textDecoration: "none",
		backgroundColor: palette.mode === "light" ? grey[50] : grey[900],
		borderColor: grey[400],
		":hover": {
			borderColor: palette[variant].main,
			backgroundColor:
				palette.mode === "light" ? palette.common.white : grey[800],
		},
	};

	return (
		<Paper
			component={Link}
			href={href}
			variant="outlined"
			sx={{ ...rootSx, ...sx }}
		>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="caption" sx={{ mt: 2 }}>
				{message}
			</Typography>
			{linkText && (
				<Typography color={variant} variant="button" sx={{ mt: 2 }}>
					{linkText}
				</Typography>
			)}
		</Paper>
	);
};
