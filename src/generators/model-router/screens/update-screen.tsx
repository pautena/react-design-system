import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayout, FormLayoutProps } from "../../../layouts";
import { useNotificationCenter } from "../../../providers/notification-center/notification-center.context";
import type { ModelRouterProps } from "../model-router";

const getUpdatePropsFromModel = (
  { modelName, model, update: { instance, onSubmit, request, requestInstance } }: ModelRouterProps,
  id: string,
): FormLayoutProps => {
  const loading = request.loading || requestInstance.loading;

  return {
    loading: loading,
    headerProps: {
      title: `Edit ${id}`,
      preset: "default",
      breadcrumbs: [
        {
          id: "list",
          text: modelName,
          link: "/",
        },
        {
          id: "update",
          text: `Edit ${id}`,
          link: `/${id}/update`,
        },
      ],
    },
    modelFormProps: {
      model,
      initialValues: instance,
      saveButtonText: "Save",
      onSubmit: onSubmit,
    },
  };
};

export const UpdateScreen = (props: ModelRouterProps) => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { show } = useNotificationCenter();
  const { onRequestInstance = () => null, request } = props.update;

  useEffect(() => {
    onRequestInstance(id);
  }, [id]);

  useEffect(() => {
    if (request.success) {
      show({
        title: "Item updated",
        message: `The item ${id} has been updated successfully`,
        severity: "success",
      });
      navigate("/");
    }
  }, [request.success]);

  return <FormLayout {...getUpdatePropsFromModel(props, id)} />;
};
