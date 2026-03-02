import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  X,
  XCircle,
} from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Board } from "@/components/data-display/board/board";
import { Button } from "@/components/inputs/button/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

/**
 * Supported alert severity levels.
 */
export type AlertSeverity = "success" | "info" | "warning" | "error";

/**
 * Props for the ExpandableAlert component.
 */
export interface ExpandableAlertProps {
  /**
   * Alert severity level.
   */
  severity: AlertSeverity;
  /**
   * Custom icon mapping for different severity levels.
   */
  iconMapping?: Partial<Record<AlertSeverity, ReactNode>>;
  /**
   * Alert title.
   */
  title?: string;
  /**
   * Alert message content.
   */
  message: string;
  /**
   * Additional metadata to display in expandable section.
   */
  metadata?: string | string[];
  /**
   * Custom component to render in expandable section.
   */
  metadataComponent?: ReactElement;
  /**
   * Callback when alert is closed.
   */
  onClose: () => void;
  /**
   * Additional class names for the alert container.
   */
  className?: string;
}

const defaultIcons: Record<AlertSeverity, ReactNode> = {
  success: <CheckCircle2 className="h-4 w-4" aria-hidden="true" />,
  info: <Info className="h-4 w-4" aria-hidden="true" />,
  warning: <AlertTriangle className="h-4 w-4" aria-hidden="true" />,
  error: <XCircle className="h-4 w-4" aria-hidden="true" />,
};

/**
 * Alert component with expandable metadata section.
 */
export function ExpandableAlert({
  severity,
  iconMapping,
  title,
  message,
  metadata,
  metadataComponent,
  onClose,
  className,
}: ExpandableAlertProps) {
  const [expanded, setExpanded] = useState(false);
  const icon = iconMapping?.[severity] ?? defaultIcons[severity];

  return (
    <Alert
      variant={severity === "error" ? "destructive" : "default"}
      className={cn(className)}
    >
      {icon}
      <div className="w-full space-y-2">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{message}</AlertDescription>
        {metadata ? (
          <Collapsible open={expanded} onOpenChange={setExpanded}>
            <CollapsibleContent className="mt-3">
              <Board content={metadata}>{metadataComponent}</Board>
            </CollapsibleContent>
          </Collapsible>
        ) : null}
      </div>
      <AlertAction>
        <div className="flex flex-col gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="close alert"
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
          {metadata ? (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={expanded ? "collapse metadata" : "expand metadata"}
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? (
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          ) : null}
        </div>
      </AlertAction>
    </Alert>
  );
}
