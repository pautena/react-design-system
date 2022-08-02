import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModelRouterProps } from "..";
import { PlaceholderIconArgs } from "../../../components";
import { DetailsLayout, DetailsLayoutProps } from "../../../layouts";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const getDetailsPropsFromModel = (
  { modelName, model, detail }: ModelRouterProps,
  id: string,
): DetailsLayoutProps => {
  return {
    loading: detail.request.loading,
    headerProps: {
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
    },
    objectDetailsProps: {
      model,
      instance: detail.instance,
    },
    notFoundPlaceholderProps: {
      title: "Not found",
      subtitle: "There is no item with that id",
      icon: ({ size, color }: PlaceholderIconArgs) => (
        <SentimentVeryDissatisfiedIcon color={color} sx={{ fontSize: size }} />
      ),
    },
  };
};

export const DetailsScreen = (props: ModelRouterProps) => {
  const onScreenMount = props.detail.onScreenMount;
  const { id = "" } = useParams();

  useEffect(() => {
    onScreenMount && onScreenMount(id);
  }, [id]);

  return <DetailsLayout {...getDetailsPropsFromModel(props, id)} />;
};
