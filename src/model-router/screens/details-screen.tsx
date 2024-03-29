import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderLayout } from "../../header-layout";
import { BaseScreenProps } from "./screens.types";
import { ObjectDetails } from "../../object-details";
import { Header } from "../../header";
import { Content } from "../../content";
import { RequestState } from "../../model-router";
import { BasicModelInstance } from "../../generators";

export interface DetailsScreenProps<T extends BasicModelInstance> extends BaseScreenProps {
  /**
   * Callback executed each time we want
   * the details information of an item
   */
  onRequestItem: (id: string) => void;

  /**
   * Current status of the request to retrieve
   * an item
   */
  itemRequest: RequestState;

  /**
   * Item to be displayed
   */
  detailsItem?: T;
}

export const DetailsScreen = <T extends BasicModelInstance>({
  model,
  modelName,
  basePath = "",
  onRequestItem,
  itemRequest,
  detailsItem,
}: DetailsScreenProps<T>) => {
  const { id = "" } = useParams();

  useEffect(() => {
    onRequestItem(id);
  }, [id]);

  return (
    <HeaderLayout loading={itemRequest.loading}>
      <Header
        title={id}
        preset="default"
        breadcrumbs={[
          {
            id: "list",
            text: modelName,
            link: `${basePath}/`,
          },
          {
            id: "detail",
            text: id,
            link: `${basePath}/${id}`,
          },
        ]}
      />
      <Content>{detailsItem && <ObjectDetails model={model} instance={detailsItem} />}</Content>
    </HeaderLayout>
  );
};
