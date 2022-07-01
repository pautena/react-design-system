import React from 'react';
import {Box} from '@mui/material'
import { Header, HeaderProps } from '../../components';
import { Container } from '@mui/system';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

interface Props  {
  headerProps: HeaderProps;
  dataGridProps:DataGridProps & { height: number};
}

export const DataTableLayout = ({headerProps,dataGridProps:{height,...restDataGridProps}}:Props)=> {
  return (
    <Box>
      <Header {...headerProps} />
      <Container component="main" sx={{py:3}}>
        <DataGrid {...restDataGridProps} sx={{height}}/>
      </Container>
    </Box>
    )
}