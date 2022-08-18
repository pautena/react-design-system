import React from "react";
import { HeaderProps } from "../../components";
import { ModelFormProps, ModelForm, BasicModelInstance } from "../../generators";
import { HeaderLayout } from "../header-layout";

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
    <HeaderLayout loading={loading} headerProps={headerProps}>
      <ModelForm {...modelFormProps} />
    </HeaderLayout>
  );
};
