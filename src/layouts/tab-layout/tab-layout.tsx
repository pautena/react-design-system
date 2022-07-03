
import React, { PropsWithChildren } from 'react';
import { Header, HeaderProps } from '../../components';
import { HeaderLayout } from '../header-layout';

interface Props  {
  headerProps: HeaderProps;
}

export const TabLayout = ({headerProps,children}:PropsWithChildren<Props>)=> {
  return (
    <HeaderLayout headerProps={headerProps}>
      {children}
    </HeaderLayout>
  );
}