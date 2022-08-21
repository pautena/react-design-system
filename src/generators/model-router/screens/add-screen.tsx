import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Content } from "~/components";
import { BasicModelInstance, ModelForm } from "~/generators";
import { HeaderLayout } from "../../../layouts";
import { useNotificationCenter } from "../../../providers";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface AddScreenProps<T extends BasicModelInstance> extends BaseScreenProps {
  /**
   * Callback executed when the user wants to
   * add a new item
   */
  onSubmitNewItem: (obj: T) => void;

  /**
   * Current status of the request to retrieve
   * add a new item
   */
  newItemRequest: RequestState;
}

export const AddScreen = <T extends BasicModelInstance>({
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
    <HeaderLayout loading={newItemRequest.loading}>
      <Header
        title={`Add ${modelName}`}
        preset="default"
        breadcrumbs={[
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
        ]}
      />
      <Content>
        <ModelForm model={model} saveButtonText="Save" onSubmit={onSubmitNewItem} />
      </Content>
    </HeaderLayout>
  );
};
