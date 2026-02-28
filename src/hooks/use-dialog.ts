import { useState } from "react";

/**
 * Hook to manage a boolean dialog open state.
 */
export const useDialog = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close, setIsOpen };
};
