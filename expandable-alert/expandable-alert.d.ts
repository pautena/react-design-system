import { AlertColor } from '@mui/material/Alert';
import { SxProps, Theme } from '@mui/material/styles';
import { ReactElement } from '../../node_modules/react';
export interface ExpandableAlertProps {
    severity: AlertColor;
    iconMapping?: Partial<Record<AlertColor, React.ReactNode>>;
    title?: string;
    message: string;
    metadata?: string | string[];
    metadataComponent?: ReactElement;
    onClose: () => void;
    sx?: SxProps<Theme>;
}
export declare const ExpandableAlert: import('../../node_modules/react').ForwardRefExoticComponent<ExpandableAlertProps & import('../../node_modules/react').RefAttributes<any>>;
