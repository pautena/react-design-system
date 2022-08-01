import React from "react";
import { HeaderProps, Placeholder, PlaceholderProps } from "../../components";
import { Model, ObjectDetails, ObjectDetailsProps } from "../../generators";
import { HeaderLayout } from "../header-layout";

export interface DetailsLayoutProps {
  loading?: boolean;
  headerProps: HeaderProps;
  objectDetailsProps: {
    model: Model;
    instance?: object;
  };
  notFoundPlaceholderProps: PlaceholderProps;
}

export const DetailsLayout = ({
  loading,
  headerProps,
  notFoundPlaceholderProps,
  objectDetailsProps: { model, instance },
}: DetailsLayoutProps) => {
  const notFound = !loading && !instance;

  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      {!notFound && instance ? (
        <ObjectDetails model={model} instance={instance} />
      ) : (
        <Placeholder {...notFoundPlaceholderProps} />
      )}
    </HeaderLayout>
  );
};
