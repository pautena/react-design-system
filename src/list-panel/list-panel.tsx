import { Link, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import { type PropsWithChildren, useState } from "react";
import { useGetDefaultThemeColor } from "../utils";
import { ListPanelContextProvider } from "./list-panel.context";

export interface ListPanelItem {
	id: string;
	text: string;
	tooltip?: string;
	href?: string;
	path?: string;
}

export type ListPanelProps = PropsWithChildren<{
	/**
	 * The ID of the item that should be selected by default.
	 */
	defaultSelectedItem?: string;
	/**
	 * The list of items to be displayed in the panel.
	 */
	items: ListPanelItem[];
	/**
	 * The mode of the list, either "panel" or "navigation".
	 */
	listMode?: "panel" | "navigation";
	/**
	 * The breakpoint for column layout.
	 */
	colBreakpoint?: number;
	/**
	 * Callback function that is called when the selected item changes.
	 */
	onSelectedItemChange?: (id: string) => void;
}>;

/**
 * ListPanel component renders a panel with a list of items and a content area.
 */
export const ListPanel = ({
	items,
	defaultSelectedItem,
	colBreakpoint = 3,
	listMode = "panel",
	children,
	onSelectedItemChange = () => null,
}: ListPanelProps) => {
	const paths = items.map((item) => item.path).filter(Boolean) as string[];

	const bgColor = useGetDefaultThemeColor();
	const { palette, typography } = useTheme();
	const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

	const handleSelectItem = (id: string) => {
		setSelectedItem(id);
		onSelectedItemChange(id);
	};

	return (
		<ListPanelContextProvider value={selectedItem}>
			<Grid container bgcolor={bgColor} height={1}>
				<Grid item xs={colBreakpoint} pl={1} height={1}>
					<List sx={{ height: 1, overflowY: "auto" }}>
						{items.map(({ id, text, tooltip, path, href }) => {
							const linkProps =
								listMode === "navigation" ? { component: Link, href } : {};

							const contentEl = (
								<ListItemButton
									{...linkProps}
									key={id}
									dense
									onClick={() => handleSelectItem(id)}
									aria-label={text}
								>
									<ListItemText
										primary={text}
										primaryTypographyProps={{
											color: grey[600],
										}}
									/>
								</ListItemButton>
							);

							return tooltip ? (
								<Tooltip
									key={id}
									title={tooltip}
									enterDelay={1500}
									placement="right"
								>
									{contentEl}
								</Tooltip>
							) : (
								contentEl
							);
						})}
					</List>
				</Grid>
				<Grid item xs={12 - colBreakpoint} pl={1} py={1} pr={1}>
					<Paper
						elevation={0}
						sx={{
							width: 1,
							height: 1,
							backgroundColor: palette.background.paper,
						}}
					>
						{children}
					</Paper>
				</Grid>
			</Grid>
		</ListPanelContextProvider>
	);
};
