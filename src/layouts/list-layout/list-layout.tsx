import React from 'react';
import { BasicData, HeaderProps, TableList, TableListProps } from '../../components';
import { HeaderLayout } from '../header-layout';

export interface ListLayoutProps<T extends BasicData> {
  loading?:boolean;
  headerProps: HeaderProps;
  listProps:TableListProps<T>;
}

export const ListLayout = <T extends BasicData,>({loading,headerProps,listProps}:ListLayoutProps<T>)=> {
  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      <TableList {...listProps} />
    </HeaderLayout>
  )
}