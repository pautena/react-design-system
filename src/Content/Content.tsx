import Container from "@mui/material/Container";
import type { ContentProps } from "./Content.types";

/**
 * A functional component that renders its children inside a main container.
 */
export function Content({ children }: ContentProps) {
  return (
    <Container component="main" sx={{ py: 3, flexGrow: 1 }}>
      {children}
    </Container>
  );
}

export default Content;
