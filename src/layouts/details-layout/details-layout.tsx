import React from "react";
import { HeaderProps, Placeholder, PlaceholderProps } from "../../components";
import { BasicModelInstance, Model } from "../../generators/generators.model";
import { ObjectDetails } from "../../generators/object-details";
import { HeaderLayout } from "../header-layout";

export interface DetailsLayoutProps<T extends BasicModelInstance> {
  loading?: boolean;
  headerProps: HeaderProps;
  objectDetailsProps: {
    model: Model;
    instance?: T;
  };
  notFoundPlaceholderProps: PlaceholderProps;
}

export const DetailsLayout = <T extends BasicModelInstance>({
  loading,
  headerProps,
  notFoundPlaceholderProps,
  objectDetailsProps: { model, instance },
}: DetailsLayoutProps<T>) => {
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
