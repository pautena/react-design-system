import React from "react";
import { HeaderProps } from "../../components";
import { ObjectDetails, ObjectDetailsProps } from "../../generators";
import { HeaderLayout } from "../header-layout";

export interface DetailsLayoutProps {
  loading?: boolean;
  headerProps: HeaderProps;
  objectDetailsProps: ObjectDetailsProps;
}

export const DetailsLayout = ({ loading, headerProps, objectDetailsProps }: DetailsLayoutProps) => {
  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      <ObjectDetails {...objectDetailsProps} />
    </HeaderLayout>
  );
};
