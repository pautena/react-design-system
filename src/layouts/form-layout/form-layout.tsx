import React from "react";
import { HeaderProps } from "../../components";
import { ModelFormProps, ModelForm } from "../../generators";
import { HeaderLayout } from "../header-layout";

export interface FormLayoutProps {
  loading?: boolean;
  headerProps: HeaderProps;
  modelFormProps: ModelFormProps;
}

export const FormLayout = ({ loading, headerProps, modelFormProps }: FormLayoutProps) => {
  return (
    <HeaderLayout loading={loading} headerProps={headerProps}>
      <ModelForm {...modelFormProps} />
    </HeaderLayout>
  );
};
