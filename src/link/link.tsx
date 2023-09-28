import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import MuiLink, { LinkProps } from "@mui/material/Link";

/* eslint-disable react/display-name, @typescript-eslint/no-explicit-any */
export const LinkBehaviour = forwardRef<
  any,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

export const Link = forwardRef<any, LinkProps>((props, _1) => {
  return <MuiLink {...(props as any)} component={LinkBehaviour} />;
});
