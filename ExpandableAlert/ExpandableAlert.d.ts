import { AlertColor } from '@mui/material/Alert';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactElement } from '../../node_modules/react';
/**
 * Props for the ExpandableAlert component
 */
export interface ExpandableAlertProps {
    /**
     * Alert severity level
     */
    severity: AlertColor;
    /**
     * Custom icon mapping for different severity levels
     */
    iconMapping?: Partial<Record<AlertColor, React.ReactNode>>;
    /**
     * Alert title
     */
    title?: string;
    /**
     * Alert message content
     */
    message: string;
    /**
     * Additional metadata to display in expandable section
     */
    metadata?: string | string[];
    /**
     * Custom component to render in expandable section
     */
    metadataComponent?: ReactElement;
    /**
     * Callback when alert is closed
     */
    onClose: () => void;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
}
/**
 * Alert component with expandable metadata section
 */
declare const ExpandableAlert: import('../../node_modules/react').ForwardRefExoticComponent<ExpandableAlertProps & import('../../node_modules/react').RefAttributes<any>>;
export default ExpandableAlert;
