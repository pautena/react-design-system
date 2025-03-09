import Container from "@mui/material/Container";
import { ContentProps } from "./content.types";

/**
 * A functional component that renders its children inside a main container.
 */
export const Content = ({ children }: ContentProps) => {
  return (
    <Container component="main" sx={{ py: 3, flexGrow: 1 }}>
      {children}
    </Container>
  );
};
