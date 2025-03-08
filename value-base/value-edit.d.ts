import { SxProps, Theme } from '@mui/material/styles';
export interface ValueEditButtonsProps {
    onClickCancel: () => void;
    onClickSubmit: () => void;
    sx?: SxProps<Theme>;
}
export declare const ValueEditButtons: ({ onClickCancel, onClickSubmit, sx }: ValueEditButtonsProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Hook to manage the editing behaviour
 */
export declare const useEditableValueDisplay: <T>(initialValue: T | undefined, onEdit: (value?: T) => void) => {
    isEditing: boolean;
    cancelEdit: () => void;
    editValue: T | undefined;
    setEditValue: import('../../node_modules/react').Dispatch<import('../../node_modules/react').SetStateAction<T | undefined>>;
    startEdit: () => void;
    submitEdit: () => void;
};
export interface ValueEditButtonProps {
    dense?: boolean;
    onClick: () => void;
}
export declare const ValueEditButton: ({ dense, onClick }: ValueEditButtonProps) => import("react/jsx-runtime").JSX.Element;
