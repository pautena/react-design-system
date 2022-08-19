import { Box, Container } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Header, HeaderProps } from "../../components";
import { LoadingArea } from "../../components/loading-area";

type Props = PropsWithChildren<{
  loading?: boolean;
  headerProps: HeaderProps;
}>;

export const DeprecatedHeaderLayout = ({ loading, headerProps, children }: Props) => {
  return (
    <Box display="flex" flexDirection="column" height={1}>
      <Header {...headerProps} />
      <Container component="main" sx={{ py: 3, flexGrow: 1 }}>
        {loading ? <LoadingArea /> : children}
      </Container>
    </Box>
  );
};
