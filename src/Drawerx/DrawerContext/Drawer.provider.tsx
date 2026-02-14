import { Link } from "@mui/material";
import type { PropsWithChildren } from "react";
import { type ElementType, useState } from "react";
import type { DrawerSize, DrawerState, DrawerVariant } from "../Drawer.types";
import { DrawerContext } from "./DrawerContext";
import { drawerWidth } from "./DrawerMixins";

const initialState: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  persistent: "close",
};

const targetStates: Record<DrawerVariant, [DrawerState, DrawerState]> = {
  temporary: ["close", "open"],
  mini: ["collapse", "open"],
  persistent: ["close", "open"],
};

export interface DrawerProviderProps extends PropsWithChildren {
  /**
   * Initial state of the drawer
   */
  initialState?: DrawerState;
  /**
   * Size of the drawer
   * @default "medium"
   */
  size?: DrawerSize;
  /**
   * Whether the drawer is clipped under the app bar
   * @default true
   */
  clipped?: boolean;
  /**
   * Width of the drawer in pixels
   */
  drawerWidth?: number;
  /**
   * Variant of the drawer behavior
   * - temporary: slides over content, closes on backdrop click
   * - persistent: pushes content when open
   * - mini: shows icons only when collapsed
   * @default "temporary"
   */
  variant?: DrawerVariant;
  /**
   * ID of the currently selected navigation item
   */
  selectedItemId?: string;
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent?: ElementType;
  /**
   * Callback fired when the drawer state changes
   * @param newState - The new drawer state
   */
  onStateChange?: (newState: DrawerState) => void;
}

export const DrawerProvider = ({
  children,
  initialState: initialStateProp,
  variant = "temporary",
  size = "medium",
  drawerWidth: drawerWidthProp = drawerWidth,
  clipped = true,
  selectedItemId,
  LinkComponent = Link,
  onStateChange = () => null,
}: DrawerProviderProps) => {
  const [state, setState] = useState<DrawerState>(
    initialStateProp || initialState[variant],
  );

  const handleChangeState = (newState: DrawerState) => {
    onStateChange(newState);
    setState(newState);
  };

  return (
    <DrawerContext.Provider
      value={{
        state,
        size,
        variant,
        selectedItemId,
        clipped,
        drawerWidth: drawerWidthProp,
        LinkComponent,
        switchState: () =>
          handleChangeState(targetStates[variant][state === "open" ? 0 : 1]),
        collapse: () => handleChangeState("collapse"),
        close: () => handleChangeState("close"),
        open: () => handleChangeState("open"),
        setState,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
