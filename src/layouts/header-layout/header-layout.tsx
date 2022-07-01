import { Box, Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Header, HeaderProps } from '../../components';

interface Props {
  headerProps:HeaderProps;
}

export const HeaderLayout = ({headerProps,children}:PropsWithChildren<Props>)=> {
  return (
    <Box>
      <Header {...headerProps} />
      <Container component="main" sx={{py:3}}>
        {children}
      </Container>
    </Box>
  )
}