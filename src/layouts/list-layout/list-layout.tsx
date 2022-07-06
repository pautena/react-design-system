import React from 'react';
import { BasicData, HeaderProps, Placeholder, PlaceholderProps, TableList, TableListProps } from '../../components';
import { HeaderLayout } from '../header-layout';

export interface ListLayoutProps<T extends BasicData> {
  loading?:boolean;
  headerProps: HeaderProps;
  listProps:TableListProps<T>;
  emptyPlaceholderProps:PlaceholderProps;
}

export const ListLayout = <T extends BasicData,>({loading,headerProps,emptyPlaceholderProps,listProps:{data,...restListProps}}:ListLayoutProps<T>)=> {
  const isEmpty = data.length === 0;

  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
    {!isEmpty?(
      <TableList data={data} {...restListProps} />
    ):<Placeholder {...emptyPlaceholderProps}/>}
    </HeaderLayout>
  )
}