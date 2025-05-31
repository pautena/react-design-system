import type { JSXElementConstructor } from "react";
import { Drawer } from "../drawer";
import { DrawerAppBar, type DrawerAppBarProps } from "../drawer-app-bar";
import { DrawerContent } from "../drawer-content";
import { DrawerProvider, type DrawerProviderProps } from "../drawer-context";
import { DrawerMain } from "../drawer-main";
import type {
	DrawerContentProps,
	DrawerNavigation,
	DrawerProps,
} from "../drawer.types";

/**
 * Interface representing the slots for the DrawerLayout component.
 */
export interface DrawerLayoutSlots {
	/**
	 * Slot for the DrawerAppBar component.
	 * This component is responsible for rendering the app bar within the drawer layout.
	 */
	drawerAppBar?: JSXElementConstructor<DrawerAppBarProps>;

	/**
	 * Slot for the Drawer component.
	 * This component is responsible for rendering the drawer within the drawer layout.
	 */
	drawer?: JSXElementConstructor<DrawerProps>;

	/**
	 * Slot for the DrawerContent component.
	 * This component is responsible for rendering the content within the drawer layout.
	 */
	drawerContent?: JSXElementConstructor<DrawerContentProps>;
}

/**
 * Interface representing the slot properties for the DrawerLayout component.
 */
export interface DrawerLayoutSlotProps {
	/**
	 * Properties for the DrawerAppBar component.
	 */
	drawerAppBar?: DrawerAppBarProps;

	/**
	 * Properties for the Drawer component.
	 */
	drawer?: DrawerProps;

	/**
	 * Properties for the DrawerContent component.
	 */
	drawerContent?: DrawerContentProps;
}

/**
 * Props for the DrawerLayout component.
 */
export interface DrawerLayoutProps extends DrawerProviderProps {
	/**
	 * The title of the drawer layout.
	 */
	title: string;

	/**
	 * The navigation configuration for the drawer.
	 */
	navigation: DrawerNavigation;

	/**
	 * Optional slots for custom rendering within the drawer layout.
	 */
	slots?: DrawerLayoutSlots;

	/**
	 * Optional props for the slots.
	 */
	slotsProps?: DrawerLayoutSlotProps;
}

/**
 * DrawerLayout component provides a layout structure with a drawer and an app bar.
 * It allows customization of the drawer, app bar, and drawer content through slots and slot properties.
 */
export const DrawerLayout = ({
	children,
	navigation,
	title,
	slots,
	slotsProps,
	...rest
}: DrawerLayoutProps) => {
	const DrawerAppBarSlot = slots?.drawerAppBar ?? DrawerAppBar;
	const DrawerSlot = slots?.drawer ?? Drawer;
	const DrawerContentSlot = slots?.drawerContent ?? DrawerContent;

	return (
		<DrawerProvider {...rest}>
			<DrawerAppBarSlot
				title={title}
				color="inherit"
				{...slotsProps?.drawerAppBar}
			/>
			<DrawerSlot {...slotsProps?.drawer}>
				<DrawerContentSlot
					navigation={navigation}
					{...slotsProps?.drawerContent}
				/>
			</DrawerSlot>
			<DrawerMain>{children}</DrawerMain>
		</DrawerProvider>
	);
};
