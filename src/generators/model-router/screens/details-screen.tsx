import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModelRouterProps } from "..";
import { PlaceholderIconArgs } from "../../../components";
import { DetailsLayout, DetailsLayoutProps } from "../../../layouts";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export const DetailsScreen = ({
  model,
  modelName,
  detail: { request, onScreenMount, instance },
}: ModelRouterProps) => {
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
