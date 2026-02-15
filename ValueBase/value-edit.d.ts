import { SxProps, Theme } from '@mui/material/styles';
/**
 * Props for the ValueEditButtons component
 */
export interface ValueEditButtonsProps {
    /**
     * Callback when cancel button is clicked
     */
    onClickCancel: () => void;
    /**
     * Callback when submit button is clicked
     */
    onClickSubmit: () => void;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
}
/**
 * Cancel and submit buttons for editable value components
 */
export declare function ValueEditButtons({ onClickCancel, onClickSubmit, sx, }: ValueEditButtonsProps): import("react/jsx-runtime").JSX.Element;
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
/**
 * Props for the ValueEditButton component
 */
export interface ValueEditButtonProps {
    /**
     * Whether to use dense spacing
     */
    dense?: boolean;
    /**
     * Click handler for edit button
     */
    onClick: () => void;
}
/**
 * Edit button for value components
 */
export declare function ValueEditButton({ dense, onClick }: ValueEditButtonProps): import("react/jsx-runtime").JSX.Element;
