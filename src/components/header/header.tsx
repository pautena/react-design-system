import React from "react";
import { Breadcrumbs, Typography, Container, useTheme, Box, ButtonGroup, Button, ButtonPropsVariantOverrides } from "@mui/material";
import { Link } from "../link";
import { PropTypes } from "@mui/material";

type ColorPreset = PropTypes.Color | 'transparent';

export type HeaderAction ={
  id:string;
  text:string;
} & ({href:string;} | {onClick:()=>void;})

export interface HeaderBreadcrumb {
  id: string;
  text: string;
  link: string;
}

export interface HeaderProps {
  title: string;
  subtitle?:string;
  color: ColorPreset;
  breadcrumbs?: HeaderBreadcrumb[];
  actionsVariant:'text' | 'outlined' | 'contained';
  actions?:HeaderAction[];
}

export const Header = ({ title,subtitle, color="default",actionsVariant="outlined", breadcrumbs,actions }: HeaderProps) => {
  const {palette} = useTheme();

  const bgColorPresets:Record<ColorPreset,string> = {
    'default':palette.mode === 'light' ? palette.grey[100] : palette.grey[900],
    "primary":palette.primary.main,
    "secondary":palette.secondary.main,
    "inherit":"inherit",
    "transparent":'transparent'
  }
  const bgColor = bgColorPresets[color];
  const textColorPresets:Record<ColorPreset,string> = {
    'default':palette.getContrastText(bgColorPresets.default),
    "primary":palette.primary.contrastText,
    "secondary":palette.secondary.contrastText,
    "inherit":"inherit",
    "transparent":palette.text.primary,
  }
  const textColor = textColorPresets[color];
  
  return (
    <Box bgcolor={bgColor} color={textColor}>
      <Container sx={{ py: 3, display:'flex',flexDirection:'row', justifyContent:"space-between" }}>
        <Box>
          {breadcrumbs?.length && (
            <Breadcrumbs color="inherit" separator="›" aria-label="breadcrumb" sx={{ marginTop: 1 }}>
              {breadcrumbs.map(({ id, link, text }) => (
                <Link key={id} underline="hover" color="inherit" href={link} variant="body2">
                  {text}
                </Link>
              ))}
            </Breadcrumbs>
          )}
          <Typography variant="h4">{title}</Typography>
          {subtitle && (<Typography variant="body1">{subtitle}</Typography>)}
        </Box>
        {actions && (
          <Box>
            {actions.map((action,i)=>(
              <Button 
              color="info"
              key={action.id} 
              variant={actionsVariant} 
              size="small"
              href={action.href}
              onClick={action.onClick}
              sx={{mr:i!=actions.length-1?1:0}}
              >
                {action.text}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};
