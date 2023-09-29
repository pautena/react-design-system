import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import { SkeletonGrid } from "../skeleton-grid";

export type ContentPlaceholderProps = PropsWithChildren<{
  size?: number;
  p?: number;
}>;

export const ContentPlaceholder = ({ size = 20, children, p }: ContentPlaceholderProps) => {
  return (
    <Container component="main" sx={{ p }} data-testid="content-placeholder-test">
      {children}
      <SkeletonGrid size={size} />
    </Container>
  );
};
