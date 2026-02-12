import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import type {
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
} from "react";
import { Content, type ContentProps } from "../Content";
import { Header, type HeaderProps } from "../Header";
import { LoadingArea } from "../LoadingArea";
import { Placeholder, type PlaceholderIcon } from "../Placeholder";
import { TabProvider } from "../TabProvider";

/**
 * Interface representing the slots for the HeaderLayout component.
 */
export interface HeaderLayoutSlots {
  /**
   * Optional slot for the header component.
   * Should be a JSX element constructor that takes HeaderProps as props.
   */
  header?: JSXElementConstructor<HeaderProps>;

  /**
   * Optional slot for the content component.
   * Should be a JSX element constructor that takes ContentProps as props.
   */
  content?: JSXElementConstructor<ContentProps>;
}

/**
 * Props for the HeaderLayout component slots.
 */
export interface HeaderLayoutSlotProps {
  /**
   * Props for the header slot.
   */
  header?: HeaderProps;

  /**
   * Props for the content slot.
   */
  content?: ContentProps;
}

/**
 * Represents an error that can occur in the HeaderLayout component.
 */
export interface HeaderLayoutError {
  /**
   * Optional icon to display with the error.
   */
  icon?: PlaceholderIcon;

  /**
   * Optional title for the error.
   */
  title?: string;

  /**
   * The error message to display.
   */
  message: string;
}

export type HeaderLayoutProps = PropsWithChildren<{
  /**
   * The title to be displayed in the header.
   */
  title: string | ReactElement;
  /**
   * An optional subtitle to be displayed in the header.
   */
  subtitle?: string | ReactElement;
  /**
   * Optional slots for custom components within the header layout.
   */
  slots?: HeaderLayoutSlots;
  /**
   * Optional props for the custom slots.
   */
  slotProps?: HeaderLayoutSlotProps;
  /**
   * Optional flag to indicate if the header layout is in a loading state.
   */
  loading?: boolean;
  /**
   * Optional flag to indicate if the header layout is in a fetching state.
   */
  fetching?: boolean;
  /**
   * Optional error object to be displayed in the header layout.
   */
  error?: HeaderLayoutError;
}>;

const DefaultErrorIcon = () => (
  <ReportProblemIcon color="error" sx={{ width: 200, height: 200 }} />
);

/**
 * A layout component that provides a header and content area with optional loading, fetching, and error states.
 */
export const HeaderLayout = ({
  loading,
  title,
  subtitle,
  slots,
  slotProps,
  children,
  fetching,
  error,
}: HeaderLayoutProps) => {
  const HeaderSlot = slots?.header || Header;
  const ContentSlot = slots?.content || Content;

  return (
    <TabProvider>
      <Box display="flex" flexDirection="column" height={1}>
        <HeaderSlot title={title} subtitle={subtitle} {...slotProps?.header} />
        {fetching && (
          <Box width={1}>
            <LinearProgress />
          </Box>
        )}
        {loading && (
          <Box
            width={1}
            height={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Box mt={4}>
            <Placeholder
              icon={error.icon || DefaultErrorIcon}
              title={error.title || "There has been an error"}
              subtitle={error.message}
            />
          </Box>
        )}
        {!loading && !error && (
          <ContentSlot {...slotProps?.content}>{children}</ContentSlot>
        )}
      </Box>
    </TabProvider>
  );
};
