import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RequestState } from "../model-router.types";
import { PlaceholderIconArgs } from "~/components";
import { DetailsLayout } from "~/layouts";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { BaseScreenProps } from "./screens.types";

export interface DetailsScreenProps extends BaseScreenProps {
  detail: {
    onScreenMount?: (id: string) => void;
    request: RequestState;
    instance?: any;
  };
}

export const DetailsScreen = ({
  model,
  modelName,
  detail: { request, onScreenMount, instance },
}: DetailsScreenProps) => {
  const { id = "" } = useParams();

  useEffect(() => {
    onScreenMount && onScreenMount(id);
  }, [id]);

  return (
    <DetailsLayout
      loading={request.loading}
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
        instance,
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
