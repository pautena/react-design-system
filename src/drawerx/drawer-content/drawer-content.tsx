import { List, useTheme } from "@mui/material";
import { useDrawer } from "../drawer-context";
import { DrawerItem } from "../drawer-item";
import type {
	DrawerContentComponent,
	DrawerContentProps,
} from "../drawer.types";

/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({
	navigation,
}: DrawerContentProps) => {
	const { size } = useDrawer();
	const { spacing } = useTheme();

	return (
		<List
			sx={{
				paddingTop: size === "small" ? spacing(0.5) : undefined,
				paddingX: size === "small" ? spacing(0.5) : spacing(1),
			}}
		>
			{navigation.map((item) => (
				<DrawerItem key={item.id} item={item} />
			))}
		</List>
	);
};
