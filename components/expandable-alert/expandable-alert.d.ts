import { ReactElement, ReactNode } from '../../../node_modules/react';
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
/**
 * Alert component with expandable metadata section.
 */
export declare function ExpandableAlert({ severity, iconMapping, title, message, metadata, metadataComponent, onClose, className, }: ExpandableAlertProps): import("react/jsx-runtime").JSX.Element;
export default ExpandableAlert;
