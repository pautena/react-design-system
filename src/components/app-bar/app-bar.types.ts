import { FunctionComponent } from "react";
import { AppBarProps as MuiAppBarProps } from "@mui/material";

export interface AppBarProfile {
  name: string;
}

export interface AppBarProps extends MuiAppBarProps {
  menu?: boolean;
  title?: string;
  search?: boolean;
  profile?: AppBarProfile;
  onClickSignOut: () => void;
}

export type AppBarComponent = FunctionComponent<AppBarProps>;
