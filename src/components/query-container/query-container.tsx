import { CheckCircle2, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

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

export interface QueryContainerProps {
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
  /**
   * Content to display when not in loading/error/success state
   */
  children?: ReactNode;
  /**
   * Optional wrapper classes
   */
  className?: string;
}

/**
 * Component to show different indicators based on the usual api query statuses
 */
export function QueryContainer({
  fetching: fetchingProp = false,
  loading: loadingProp = false,
  error,
  success,
  children,
  className,
}: QueryContainerProps) {
  const fetching = Array.isArray(fetchingProp)
    ? fetchingProp.some((item) => item)
    : fetchingProp;
  const loading = Array.isArray(loadingProp)
    ? loadingProp.some((item) => item)
    : loadingProp;

  if (loading) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center",
          className,
        )}
      >
        <Loader2
          role="progressbar"
          aria-label="loading"
          className="h-5 w-5 animate-spin text-muted-foreground"
        />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" role="alert" aria-describedby="error">
        {error.name ? <AlertTitle>{error.name}</AlertTitle> : null}
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {success ? (
        <Alert role="alert" aria-describedby="success">
          <CheckCircle2 className="h-4 w-4" />
          {success.name ? <AlertTitle>{success.name}</AlertTitle> : null}
          <AlertDescription>{success.message}</AlertDescription>
        </Alert>
      ) : null}
      {fetching ? (
        <div
          role="progressbar"
          aria-label="fetching"
          className="h-1 w-full overflow-hidden rounded-full bg-muted"
        >
          <div className="h-full w-1/2 animate-pulse rounded-full bg-primary/60" />
        </div>
      ) : null}
      {children}
    </div>
  );
}

export default QueryContainer;
