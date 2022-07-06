import { Box, Container } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { Header, HeaderProps, TabContextProvider } from '../../components';
import { LoadingArea } from '../../components/loading-area';

interface Props {
  loading?:boolean;
  headerProps:HeaderProps;
}

export const HeaderLayout = ({loading,headerProps,children}:PropsWithChildren<Props>)=> {
  const [tab,setTab] = useState(0);

  return (
    <TabContextProvider value={tab}>
      <Box display="flex" flexDirection="column" height={1}>
        <Header {...headerProps} selectedTab={tab} onChangeTab={(_,index)=>setTab(index)}/>
        <Container component="main" sx={{py:3, flexGrow:1}}>
          {loading?<LoadingArea/>:children}
        </Container>
      </Box>
    </TabContextProvider>
  )
}