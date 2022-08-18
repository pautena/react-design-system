import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RequestState } from "../model-router.types";
import { BasicData, PlaceholderIconArgs } from "~/components";
import { DetailsLayout } from "~/layouts";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { BaseScreenProps } from "./screens.types";

export interface DetailsScreenProps<T extends BasicData> extends BaseScreenProps {
  /**
   * Callback executed each time we want
   * the details information of an item
   */
  requestItem: (id: string) => void;

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

export const DetailsScreen = <T extends BasicData>({
  model,
  modelName,
  requestItem,
  itemRequest,
  detailsItem,
}: DetailsScreenProps<T>) => {
  const { id = "" } = useParams();

  useEffect(() => {
    requestItem(id);
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
