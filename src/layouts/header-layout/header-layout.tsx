import { Box, Container } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { Header, HeaderProps, TabContextProvider } from '../../components';

interface Props {
  headerProps:HeaderProps;
}

export const HeaderLayout = ({headerProps,children}:PropsWithChildren<Props>)=> {
  const [tab,setTab] = useState(0);

  return (
    <Box>
      <TabContextProvider value={tab}>
        <Header {...headerProps} onChangeTab={(_,index)=>setTab(index)}/>
        <Container component="main" sx={{py:3}}>
          {children}
        </Container>
      </TabContextProvider>
    </Box>
  )
}