import { HeaderLayout } from "../../header-layout";
import { useNotifyWhenValueChanges } from "../../notification-center";
import { BaseScreenProps } from "./screens.types";
import { useNavigateWhenValueChanges } from "../../hooks";
import { Header } from "../../header";
import { Content } from "../../content";
import { BasicModelInstance } from "../../generators";
import { RequestState } from "../../model-router";
import { ModelForm } from "../../model-form";

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
