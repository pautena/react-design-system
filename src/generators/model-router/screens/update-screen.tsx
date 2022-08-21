import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Content, Header } from "~/components";
import { BasicModelInstance, ModelForm } from "~/generators";
import { HeaderLayout } from "../../../layouts";
import { useNotificationCenter } from "../../../providers";
import { RequestState } from "../model-router.types";
import { BaseScreenProps } from "./screens.types";

export interface UpdateScreenProps<T extends BasicModelInstance> extends BaseScreenProps {
  /**
   * Callback executed when the user wants to update
   * an item
   */
  onSubmitUpdateItem: (obj: T) => void;
  /**
   * Current status of the request to update an item
   */
  submitUpdateItemRequest: RequestState;

  /**
   * Current status of the request to retrieve
   * the item to be updated
   */
  updateItemRequest: RequestState;

  /**
   * Callback executed to retrive the item that
   * has to going tobe updated
   */
  onRequestUpdateItem: (id: string) => void;

  /**
   * Item that is going to be updated
   */
  updateItem?: T;
}

export const UpdateScreen = <T extends BasicModelInstance>({
  model,
  modelName,
  submitUpdateItemRequest,
  updateItemRequest,
  updateItem,
  onSubmitUpdateItem,
  onRequestUpdateItem,
}: UpdateScreenProps<T>) => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { show } = useNotificationCenter();
  const loading = updateItemRequest.loading || submitUpdateItemRequest.loading;

  useEffect(() => {
    onRequestUpdateItem(id);
  }, [id]);

  useEffect(() => {
    if (submitUpdateItemRequest.success) {
      show({
        title: "Item updated",
        message: `The item ${id} has been updated successfully`,
        severity: "success",
      });
      navigate("/");
    }
  }, [submitUpdateItemRequest.success]);

  return (
    <HeaderLayout loading={loading}>
      <Header
        title={`Edit ${id}`}
        preset="default"
        breadcrumbs={[
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
        ]}
      />
      <Content>
        <ModelForm
          model={model}
          initialValues={updateItem}
          saveButtonText="Save"
          onSubmit={onSubmitUpdateItem}
        />
      </Content>
    </HeaderLayout>
  );
};
