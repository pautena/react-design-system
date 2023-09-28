import Container from "@mui/material/Container";
import { ContentProps } from "./content.types";

export const Content = ({ children }: ContentProps) => {
  return (
    <Container component="main" sx={{ py: 3, flexGrow: 1 }}>
      {children}
    </Container>
  );
};
