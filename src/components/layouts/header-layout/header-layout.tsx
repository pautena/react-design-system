import { AlertTriangle, Loader2 } from "lucide-react";
import type { JSXElementConstructor, ReactElement } from "react";
import {
  Content,
  type ContentProps,
} from "@/components/containers/content/content";
import { Header } from "@/components/data-display/header/header";
import type { HeaderProps } from "@/components/data-display/header/header.types";
import { TabProvider } from "@/components/navigation/tab-provider/tab-provider.provider";
import {
  Placeholder,
  type PlaceholderIcon,
} from "@/components/placeholders/placeholder/placeholder";

/**
 * Slots for HeaderLayout.
 */
export interface HeaderLayoutSlots {
  /**
   * Slot for header component.
   */
  header?: JSXElementConstructor<HeaderProps>;
  /**
   * Slot for content component.
   */
  content?: JSXElementConstructor<ContentProps>;
}

/**
 * Slot props for HeaderLayout.
 */
export interface HeaderLayoutSlotProps {
  /**
   * Props for header slot.
   */
  header?: HeaderProps;
  /**
   * Props for content slot.
   */
  content?: ContentProps;
}

/**
 * Error payload for HeaderLayout.
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

/**
 * Props for HeaderLayout.
 */
export interface HeaderLayoutProps {
  /**
   * Header title.
   */
  title: string | ReactElement;
  /**
   * Optional subtitle.
   */
  subtitle?: string | ReactElement;
  /**
   * Optional slots.
   */
  slots?: HeaderLayoutSlots;
  /**
   * Optional slot props.
   */
  slotProps?: HeaderLayoutSlotProps;
  /**
   * Optional loading flag.
   */
  loading?: boolean;
  /**
   * Optional fetching flag.
   */
  fetching?: boolean;
  /**
   * Optional error state.
   */
  error?: HeaderLayoutError;
  /**
   * Content rendered in layout.
   */
  children?: React.ReactNode;
}

const DefaultErrorIcon: PlaceholderIcon = ({ size }) => (
  <AlertTriangle className="text-destructive" size={size} />
);

/**
 * Layout component with header and content area plus loading/fetching/error states.
 */
export function HeaderLayout({
  loading,
  title,
  subtitle,
  slots,
  slotProps,
  children,
  fetching,
  error,
}: HeaderLayoutProps) {
  const HeaderSlot = slots?.header || Header;
  const ContentSlot = slots?.content || Content;

  return (
    <TabProvider>
      <div className="flex h-full min-h-full flex-col">
        <HeaderSlot title={title} subtitle={subtitle} {...slotProps?.header} />

        {fetching ? (
          <div
            className="h-1 w-full bg-muted"
            role="progressbar"
            aria-label="fetching"
          />
        ) : null}

        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loader2 role="progressbar" className="h-8 w-8 animate-spin" />
          </div>
        ) : null}

        {error ? (
          <div className="mt-4">
            <Placeholder
              icon={error.icon || DefaultErrorIcon}
              title={error.title || "There has been an error"}
              subtitle={error.message}
            />
          </div>
        ) : null}

        {!loading && !error ? (
          <ContentSlot {...slotProps?.content}>{children}</ContentSlot>
        ) : null}
      </div>
    </TabProvider>
  );
}
