import React, { PropsWithChildren } from "react";
import { HeaderProps } from "../../components";
import { DeprecatedHeaderLayout } from "../depr-header-layout";

interface Props {
  headerProps: HeaderProps;
}

export const TabLayout = ({ headerProps, children }: PropsWithChildren<Props>) => {
  return <DeprecatedHeaderLayout headerProps={headerProps}>{children}</DeprecatedHeaderLayout>;
};
