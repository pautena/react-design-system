import React from 'react';
import { HeaderProps } from '../../components';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { HeaderLayout } from '../header-layout';

interface Props  {
  loading?:boolean;
  headerProps: HeaderProps;
  dataGridProps:DataGridProps & { height: number};
}

export const DataTableLayout = ({loading,headerProps,dataGridProps:{height,...restDataGridProps}}:Props)=> {
  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      <DataGrid {...restDataGridProps} sx={{height}}/>
    </HeaderLayout>
    )
}