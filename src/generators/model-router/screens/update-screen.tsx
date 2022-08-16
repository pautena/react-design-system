import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayout } from "../../../layouts";
import { useNotificationCenter } from "../../../providers/notification-center/notification-center.context";
import type { ModelRouterProps } from "../model-router";

export const UpdateScreen = ({
  model,
  modelName,
  update: { instance, onSubmit, requestInstance, request, onRequestInstance = () => null },
}: ModelRouterProps) => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { show } = useNotificationCenter();
  const loading = request.loading || requestInstance.loading;

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

  return (
    <FormLayout
      loading={loading}
      headerProps={{
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
      }}
      modelFormProps={{
        model,
        initialValues: instance,
        saveButtonText: "Save",
        onSubmit: onSubmit,
      }}
    />
  );
};
