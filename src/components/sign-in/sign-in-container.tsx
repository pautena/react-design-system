import React, { ReactNode } from "react";
import { Container } from "@mui/material";

interface Props {
  children: ReactNode | undefined;
}

export function SignInCenterContainer({ children }: Props) {
  return (
    <Container
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
}
