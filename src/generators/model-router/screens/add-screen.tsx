import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModelRouterProps } from "../..";
import { FormLayout } from "../../../layouts";
import { useNotificationCenter } from "../../../providers/notification-center/notification-center.context";

export const AddScreen = ({ model, modelName, add }: ModelRouterProps) => {
  const navigate = useNavigate();
  const { show } = useNotificationCenter();

  useEffect(() => {
    if (add.request.success) {
      show({ message: "Item added successfully", severity: "success" });
      navigate("/");
    }
  }, [add.request.success]);

  useEffect(() => {
    if (add.request.error) {
      show({ title: "We had an error", message: add.request.error, severity: "error" });
    }
  }, [add.request.error]);

  return (
    <FormLayout
      loading={add.request.loading}
      headerProps={{
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
      }}
      modelFormProps={{
        model,
        saveButtonText: "Save",
        onSubmit: add.onSubmit,
      }}
    />
  );
};
