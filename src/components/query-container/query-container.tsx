import React from "react";
import { PropsWithChildren } from "react";
import { ApiError } from "app/api-base";

interface Props {
  isFetching: boolean;
  error?: ApiError;
}

export function QueryContainer({ isFetching, error, children }: PropsWithChildren<Props>) {
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return <div>{children}</div>;
}
