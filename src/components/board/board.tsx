import { Copy } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Board component.
 */
export interface BoardProps {
  /**
   * The content to display and copy to clipboard.
   */
  content?: string | string[];
  /**
   * Vertical spacing between lines when content is an array.
   * @default 0
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
  /**
   * Optional custom children rendered instead of the default content.
   */
  children?: ReactNode;
}

/**
 * Surface for displaying and copying plain content.
 */
export function Board({
  content: contentProp,
  spacing = 0,
  className,
  children,
}: BoardProps) {
  const copyContent = Array.isArray(contentProp)
    ? contentProp.join("\n")
    : (contentProp ?? "");

  const content = Array.isArray(contentProp)
    ? contentProp.map((line, index) => (
        <p
          key={`${line}-${index}`}
          style={{ paddingBottom: `${spacing * 0.25}rem` }}
          className="leading-relaxed"
        >
          {line}
        </p>
      ))
    : contentProp;

  return (
    <div
      className={cn(
        "relative rounded-md bg-slate-800 px-4 py-2 text-sm text-white",
        className,
      )}
    >
      <div className="pr-8">{children ?? content}</div>
      {copyContent ? (
        <button
          type="button"
          aria-label="copy board content"
          title="Copy"
          className="absolute right-1.5 top-1.5 inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-100 transition hover:bg-slate-700"
          onClick={() => navigator.clipboard.writeText(copyContent)}
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}

export default Board;
