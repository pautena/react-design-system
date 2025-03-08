import { PlaceholderIcon } from '../placeholder';
import { HeaderElement } from '../header';
import { ContentElement } from '../content';
export interface HeaderLayoutError {
    icon?: PlaceholderIcon;
    title?: string;
    message: string;
}
export interface HeaderLayoutProps {
    loading?: boolean;
    fetching?: boolean;
    error?: HeaderLayoutError;
    children: [HeaderElement, ContentElement];
}
export declare const HeaderLayout: ({ loading, children, fetching, error }: HeaderLayoutProps) => import("react/jsx-runtime").JSX.Element;
