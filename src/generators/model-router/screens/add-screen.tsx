import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModelRouterProps } from "../..";
import { FormLayout, FormLayoutProps } from "../../../layouts";
import { useNotificationCenter } from "../../../providers/notification-center/notification-center.context";

const getAddPropsFromModel = ({ model, modelName, add }: ModelRouterProps): FormLayoutProps => {
  return {
    loading: add.request.loading,
    headerProps: {
      title: `Add ${modelName}`,
      preset: "default",
      breadcrumbs: [
        {
          id: "list",
          text: modelName,
          link: "/",
        },
        {
          id: "add",
          text: `Add new ${modelName}`,
          link: "/add",
        },
      ],
    },
    modelFormProps: {
      model,
      saveButtonText: "Save",
      onSubmit: add.onSubmit,
    },
  };
};

export const AddScreen = (props: ModelRouterProps) => {
  const navigate = useNavigate();
  const { show } = useNotificationCenter();

  useEffect(() => {
    if (props.add.request.success) {
      show({ message: "Item added successfully", severity: "success" });
      navigate("/");
    }
  }, [props.add.request.success]);

  useEffect(() => {
    if (props.add.request.error) {
      show({ title: "We had an error", message: props.add.request.error, severity: "error" });
    }
  }, [props.add.request.error]);

  return <FormLayout {...getAddPropsFromModel(props)} />;
};
