import React from 'react';
import { HeaderProps } from '../../components';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { HeaderLayout } from '../header-layout';

interface Props  {
  headerProps: HeaderProps;
  dataGridProps:DataGridProps & { height: number};
}

export const DataTableLayout = ({headerProps,dataGridProps:{height,...restDataGridProps}}:Props)=> {
  return (
    <HeaderLayout headerProps={headerProps}>
      <DataGrid {...restDataGridProps} sx={{height}}/>
    </HeaderLayout>
    )
}