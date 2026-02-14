import Container from "@mui/material/Container";
import SkeletonGrid from "../SkeletonGrid";

/**
 * Props for the ContentPlaceholder component.
 */
export interface ContentPlaceholderProps {
  /**
   * Optional size of the placeholder.
   */
  size?: number;
  /**
   * Optional padding for the placeholder.
   */
  p?: number;
  /**
   * Content to display before the skeleton grid
   */
  children?: React.ReactNode;
}

/**
 * A component that serves as a placeholder for content, displaying a skeleton grid.
 */
export function ContentPlaceholder({
  size = 20,
  children,
  p,
}: ContentPlaceholderProps) {
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
}

export default ContentPlaceholder;
