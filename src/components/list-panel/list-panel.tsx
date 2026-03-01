import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { ListPanelContextProvider } from "./list-panel.context";

export interface ListPanelItem {
  id: string;
  text: string;
  tooltip?: string;
  href?: string;
  path?: string;
}

export interface ListPanelProps {
  /**
   * The ID of the item that should be selected by default.
   */
  defaultSelectedItem?: string;
  /**
   * The list of items to be displayed in the panel.
   */
  items: ListPanelItem[];
  /**
   * The mode of the list, either "panel" or "navigation".
   */
  listMode?: "panel" | "navigation";
  /**
   * The breakpoint for column layout.
   */
  colBreakpoint?: number;
  /**
   * Callback function that is called when the selected item changes.
   */
  onSelectedItemChange?: (id: string) => void;
  /**
   * Content to display in the panel area
   */
  children?: ReactNode;
  /**
   * Optional wrapper classes
   */
  className?: string;
}

/**
 * ListPanel component renders a panel with a list of items and a content area.
 */
export function ListPanel({
  items,
  defaultSelectedItem,
  colBreakpoint = 3,
  listMode = "panel",
  children,
  onSelectedItemChange = () => null,
  className,
}: ListPanelProps) {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);
  const contentSpan = Math.max(1, 12 - colBreakpoint);

  const handleSelectItem = (id: string) => {
    setSelectedItem(id);
    onSelectedItemChange(id);
  };

  return (
    <ListPanelContextProvider value={selectedItem}>
      <div
        className={cn(
          "grid h-full w-full grid-cols-12 rounded-lg border border-border bg-muted/40",
          className,
        )}
      >
        <div
          className="h-full border-r border-border px-2 py-2"
          style={{
            gridColumn: `span ${colBreakpoint} / span ${colBreakpoint}`,
          }}
        >
          <ul className="flex h-full flex-col gap-1 overflow-y-auto">
            {items.map(({ id, text, tooltip, href }) => {
              const isSelected = selectedItem === id;
              const itemClasses = cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors",
                isSelected
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted",
              );

              return (
                <li key={id}>
                  {listMode === "navigation" ? (
                    <a
                      href={href}
                      className={itemClasses}
                      aria-label={text}
                      onClick={() => handleSelectItem(id)}
                      title={tooltip}
                    >
                      {text}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={itemClasses}
                      aria-label={text}
                      onClick={() => handleSelectItem(id)}
                      title={tooltip}
                    >
                      {text}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="h-full px-3 py-3"
          style={{ gridColumn: `span ${contentSpan} / span ${contentSpan}` }}
        >
          <div className="h-full w-full rounded-md bg-card p-3">{children}</div>
        </div>
      </div>
    </ListPanelContextProvider>
  );
}

export default ListPanel;
