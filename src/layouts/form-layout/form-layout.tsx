import React from "react";
import { BasicData, HeaderProps } from "../../components";
import { ModelFormProps, ModelForm } from "../../generators";
import { HeaderLayout } from "../header-layout";

export interface FormLayoutProps<T extends BasicData> {
  loading?: boolean;
  headerProps: HeaderProps;
  modelFormProps: ModelFormProps<T>;
}

export const FormLayout = <T extends BasicData>({
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
