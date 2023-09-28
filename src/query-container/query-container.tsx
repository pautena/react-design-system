import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { PropsWithChildren } from "react";
import { LoadingArea } from "~/loading-area";

export interface QueryContainerError {
  /**
   * The error title
   */
  name?: string;
  /**
   * The description of the error
   */
  message: string;
}

export interface QueryContainerSuccess {
  /**
   * The success title
   */
  name?: string;
  /**
   * The success text
   */
  message: string;
}

export type QueryContainerProps = PropsWithChildren<{
  /**
   * There is a query in progress and we have available data
   */
  fetching?: boolean | boolean[];

  /**
   * There is a query in progress and we don't have available data
   */
  loading?: boolean | boolean[];
  /**
   * The query has returned an error
   */
  error?: QueryContainerError;
  /**
   * The query has finished successfully
   */
  success?: QueryContainerSuccess;
}>;

/**
 * Component to show different indicators based on the usual api query statuses
 */
export function QueryContainer({
  fetching: fetchingProp = false,
  loading: loadingProp = false,
  error,
  success,
  children,
}: QueryContainerProps) {
  const fetching = Array.isArray(fetchingProp) ? fetchingProp.some((f) => f) : fetchingProp;
  const loading = Array.isArray(loadingProp) ? loadingProp.some((f) => f) : loadingProp;

  if (loading) {
    return <LoadingArea />;
  }

  if (error) {
    return (
      <Alert severity="error" role="alert" aria-describedby="error">
        {error.name && <AlertTitle role="heading">{error.name}</AlertTitle>}
        {error.message}
      </Alert>
    );
  }

  return (
    <Box>
      {success && (
        <Alert severity="success" role="alert" aria-describedby="success" sx={{ mb: 2 }}>
          {success.name && <AlertTitle role="heading">{success.name}</AlertTitle>}
          {success.message}
        </Alert>
      )}
      {fetching && <LinearProgress sx={{ width: 1, mb: 1 }} />}
      {children}
    </Box>
  );
}
