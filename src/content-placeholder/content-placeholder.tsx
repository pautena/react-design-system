import Container from "@mui/material/Container";
import type { PropsWithChildren } from "react";
import { SkeletonGrid } from "../skeleton-grid";

/**
 * Props for the ContentPlaceholder component.
 */
export type ContentPlaceholderProps = PropsWithChildren<{
	/**
	 * Optional size of the placeholder.
	 */
	size?: number;
	/**
	 * Optional padding for the placeholder.
	 */
	p?: number;
}>;

/**
 * A component that serves as a placeholder for content, displaying a skeleton grid.
 */
export const ContentPlaceholder = ({
	size = 20,
	children,
	p,
}: ContentPlaceholderProps) => {
	return (
		<Container
			component="main"
			sx={{ p }}
			data-testid="content-placeholder-test"
		>
			{children}
			<SkeletonGrid size={size} />
		</Container>
	);
};
