import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BasicData } from "~/components";
import { FormLayout } from "../../../layouts";
import { useNotificationCenter } from "../../../providers/notification-center/notification-center.context";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface AddScreenProps<T extends BasicData> extends BaseScreenProps {
  /**
   * Callback executed when the user whants to
   * adda new item
   */
  onSubmitNewItem: (obj: T) => void;

  /**
   * Current status of the request to retrieve
   * add a new item
   */
  newItemRequest: RequestState;
}

export const AddScreen = <T extends BasicData>({
  model,
  modelName,
  onSubmitNewItem,
  newItemRequest,
}: AddScreenProps<T>) => {
  const navigate = useNavigate();
  const { show } = useNotificationCenter();

  useEffect(() => {
    if (newItemRequest.success) {
      show({ message: "Item added successfully", severity: "success" });
      navigate("/");
    }
  }, [newItemRequest.success]);

  useEffect(() => {
    if (newItemRequest.error) {
      show({ title: "We had an error", message: newItemRequest.error, severity: "error" });
    }
  }, [newItemRequest.error]);

  return (
    <FormLayout
      loading={newItemRequest.loading}
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
        onSubmit: onSubmitNewItem,
      }}
    />
  );
};
