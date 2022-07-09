import { Box, Typography, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

export type LabelVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error";

export interface LabelProps {
  text: string;
  variant?:LabelVariant;
}

export const Label  = ({text, variant = "default"}:LabelProps)=> {
  const {palette} = useTheme();

  const backgroundColor:Record<LabelVariant,string>={
    'default':palette.mode === 'light' ? palette.grey[100] : palette.grey[900],
    "primary":palette.primary.main,
    "secondary":palette.secondary.main,
    "info":palette.info.main,
    "warning":palette.warning.main,
    "error":palette.error.main,
  };

  const textColor:Record<LabelVariant,string>={
    "default":palette.getContrastText(backgroundColor.default),
    "primary":palette.primary.contrastText,
    "secondary":palette.secondary.contrastText,
    "info":palette.info.contrastText,
    "warning":palette.warning.contrastText,
    "error":palette.error.contrastText,
  };
  
  return (
    <Box px={1} sx={{backgroundColor:backgroundColor[variant]}} borderRadius={1} color={textColor[variant]}>
      <Typography variant="caption" fontWeight={700}>{text.toUpperCase()}</Typography>
    </Box>
  )
}