import { Color } from '@mui/material';
type KeyColor = keyof Color;
export declare const useGetDefaultThemeColor: ({ lightWeight, darkWeight, }?: {
    lightWeight?: KeyColor;
    darkWeight?: KeyColor;
}) => string;
export {};
