import React from "react";
import { Content } from "~/Components/content";
import { Header } from "~/Components/Header";
import { BasicModelInstance } from "../../Generators.model";
import { ModelForm } from "../../ModelForm";
import { HeaderLayout } from "../../../Layouts/HeaderLayout";
import { useNotifyWhenValueChanges } from "../../../Providers";
import { RequestState } from "../ModelRouter.types";
import { BaseScreenProps } from "./Screens.types";
import { useNavigateWhenValueChanges } from "../../../Hooks";

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
  basePath = "",
  onSubmitNewItem,
  newItemRequest,
}: AddScreenProps<T>) => {
  useNotifyWhenValueChanges(
    { message: "Item added successfully", severity: "success" },
    !!newItemRequest.success,
    { from: false, to: true },
  );
  useNavigateWhenValueChanges(`${basePath}/`, !!newItemRequest.success, { from: false, to: true });
  useNotifyWhenValueChanges(
    { title: "We had an error", message: newItemRequest.error || "", severity: "error" },
    !!newItemRequest.error,
    { from: false, to: true },
  );

  return (
    <HeaderLayout loading={newItemRequest.loading}>
      <Header
        title={`Add ${modelName}`}
        preset="default"
        breadcrumbs={[
          {
            id: "list",
            text: modelName,
            link: `${basePath}/`,
          },
          {
            id: "add",
            text: `Add new ${modelName}`,
            link: `${basePath}/add`,
          },
        ]}
      />
      <Content>
        <ModelForm model={model} saveButtonText="Save" onSubmit={onSubmitNewItem} />
      </Content>
    </HeaderLayout>
  );
};
