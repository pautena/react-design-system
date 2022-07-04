import React from 'react';
import { BasicData, HeaderProps, TableList, TableListProps } from '../../components';
import { HeaderLayout } from '../header-layout';

export interface ListLayoutProps<T extends BasicData> {
  headerProps: HeaderProps;
  listProps:TableListProps<T>;
}

export const ListLayout = <T extends BasicData,>({headerProps,listProps}:ListLayoutProps<T>)=> {
  return (
    <HeaderLayout headerProps={headerProps}>
      <TableList {...listProps} />
    </HeaderLayout>
  )
}