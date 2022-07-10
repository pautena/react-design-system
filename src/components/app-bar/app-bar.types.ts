import { FunctionComponent } from 'react';
import { AppBarProps as MuiAppBarProps } from "@mui/material";

export interface AppBarProfile { 
  name: string;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  menu?: boolean;
  title?:string;
  search?:boolean;
  profile?:AppBarProfile;
  onClickDrawerMenu: () => void;
  onClickSignOut: () => void;
}

export type AppBarComponent = FunctionComponent<AppBarProps>