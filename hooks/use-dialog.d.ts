/**
 * Hook to manage a boolean dialog open state.
 */
export declare const useDialog: (initialOpen?: boolean) => {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    setIsOpen: import('../../node_modules/react').Dispatch<import('../../node_modules/react').SetStateAction<boolean>>;
};
