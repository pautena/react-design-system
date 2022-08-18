import React, { PropsWithChildren } from "react";
import { Container } from "@mui/material";

export type ContentProps = PropsWithChildren;

export const Content = ({ children }: ContentProps) => {
  return (
    <Container component="main" sx={{ py: 3, flexGrow: 1 }}>
      {children}
    </Container>
  );
};
