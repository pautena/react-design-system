import React from "react";
import { HeaderProps } from "../../components";
import { ModelFormProps, ModelForm, BasicModelInstance } from "../../generators";
import { DeprecatedHeaderLayout } from "../depr-header-layout";

export interface FormLayoutProps<T extends BasicModelInstance> {
  loading?: boolean;
  headerProps: HeaderProps;
  modelFormProps: ModelFormProps<T>;
}

export const FormLayout = <T extends BasicModelInstance>({
  loading,
  headerProps,
  modelFormProps,
}: FormLayoutProps<T>) => {
  return (
    <DeprecatedHeaderLayout loading={loading} headerProps={headerProps}>
      <ModelForm {...modelFormProps} />
    </DeprecatedHeaderLayout>
  );
};
