import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RequestState } from "../model-router.types";
import { PlaceholderIconArgs } from "~/components";
import { DetailsLayout } from "~/layouts";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { BaseScreenProps } from "./screens.types";
import { BasicModelInstance } from "~/generators";

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
  onRequestItem,
  itemRequest,
  detailsItem,
}: DetailsScreenProps<T>) => {
  const { id = "" } = useParams();

  useEffect(() => {
    onRequestItem(id);
  }, [id]);

  return (
    <DetailsLayout
      loading={itemRequest.loading}
      headerProps={{
        title: id,
        preset: "default",
        breadcrumbs: [
          {
            id: "list",
            text: modelName,
            link: "/",
          },
          {
            id: "detail",
            text: id,
            link: `/${id}`,
          },
        ],
      }}
      objectDetailsProps={{
        model,
        instance: detailsItem,
      }}
      notFoundPlaceholderProps={{
        title: "Not found",
        subtitle: "There is no item with that id",
        icon: ({ size, color }: PlaceholderIconArgs) => (
          <SentimentVeryDissatisfiedIcon color={color} sx={{ fontSize: size }} />
        ),
      }}
    />
  );
};
