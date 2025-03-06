import { ElementType, useState } from "react";
import { PropsWithChildren } from "react";
import { DrawerContext } from "./drawer-context";
import { DrawerState, DrawerVariant } from "src/drawerx/drawer";
import { drawerWidth } from "./drawer-mixins";
import { Link } from "@mui/material";

const initialState: Record<DrawerVariant, DrawerState> = {
  temporary: "close",
  mini: "collapse",
  clipped: "open",
  persistent: "close",
};

const targetStates: Record<DrawerVariant, [DrawerState, DrawerState]> = {
  temporary: ["close", "open"],
  mini: ["collapse", "open"],
  clipped: ["open", "open"],
  persistent: ["close", "open"],
};

export type DrawerProviderProps = PropsWithChildren<{
  initialState?: DrawerState;
  underAppBar?: boolean;
  drawerWidth?: number;
  variant?: DrawerVariant;
  selectedItemId?: string;
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent?: ElementType;
  onStateChange?: (newState: DrawerState) => void;
}>;

export const DrawerProvider = ({
  children,
  initialState: initialStateProp,
  variant = "temporary",
  drawerWidth: drawerWidthProp = drawerWidth,
  underAppBar = false,
  selectedItemId,
  LinkComponent = Link,
  onStateChange = () => null,
}: DrawerProviderProps) => {
  const [state, setState] = useState<DrawerState>(initialStateProp || initialState[variant]);

  const handleChangeState = (newState: DrawerState) => {
    onStateChange(newState);
    setState(newState);
  };

  return (
    <DrawerContext.Provider
      value={{
        state,
        variant,
        selectedItemId,
        underAppBar,
        drawerWidth: drawerWidthProp,
        LinkComponent,
        switchState: () => handleChangeState(targetStates[variant][state === "open" ? 0 : 1]),
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
