import { Breadcrumbs } from "@/components/data-display/breadcrumbs/breadcrumbs";
import { Button, type ButtonVariant } from "@/components/inputs/button/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTab } from "../../navigation/tab-provider/tab-provider.context";
import type {
  HeaderActionColor,
  HeaderActionVariant,
  HeaderPreset,
  HeaderProps,
} from "./header.types";
import { HeaderSubtitle, HeaderTitle } from "./header-title";

const bgColorPresets: Record<HeaderPreset, string> = {
  default: "bg-muted",
  primary: "bg-primary",
  secondary: "bg-secondary",
  inherit: "bg-inherit",
  transparent: "bg-transparent",
  paper: "bg-card",
};

const textColorPresets: Record<HeaderPreset, string> = {
  default: "text-foreground",
  primary: "text-primary-foreground",
  secondary: "text-secondary-foreground",
  inherit: "text-inherit",
  transparent: "text-foreground",
  paper: "text-foreground",
};

const containedColorToButtonVariant: Record<HeaderActionColor, ButtonVariant> =
  {
    inherit: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    error: "error",
    info: "info",
    warning: "warning",
  };

function getActionButtonVariant(
  actionVariant: HeaderActionVariant,
  actionColor?: HeaderActionColor,
): ButtonVariant {
  if (actionVariant === "outlined") {
    return "outline";
  }

  if (actionVariant === "text") {
    return "ghost";
  }

  return containedColorToButtonVariant[actionColor ?? "primary"];
}

/**
 * Section used to provide basic information about the page and display main actions.
 */
export function Header({
  title = "",
  subtitle,
  preset = "default",
  actionsVariant = "outlined",
  breadcrumbs,
  breadcrumbSeparator,
  actions,
  tabs,
  tabsMode = "navigation",
  navigationButton,
  border = false,
}: HeaderProps) {
  const [selectedTab, setSelectedTab] = useTab();
  const selectedTabId = tabs?.[selectedTab]?.id ?? tabs?.[0]?.id;

  return (
    <section
      className={cn(
        bgColorPresets[preset],
        textColorPresets[preset],
        border && "border-b",
      )}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between py-6">
          <div>
            {navigationButton ? (
              <Button
                variant="link"
                size="sm"
                className="mb-2 h-auto p-0 text-sm"
                onClick={() => {
                  window.location.assign(navigationButton.href);
                }}
              >
                {navigationButton.icon}
                {navigationButton.text}
              </Button>
            ) : null}

            <Breadcrumbs
              items={breadcrumbs}
              className="mt-0.5"
              separator={breadcrumbSeparator}
            />

            <HeaderTitle>{title}</HeaderTitle>

            {subtitle ? <HeaderSubtitle>{subtitle}</HeaderSubtitle> : null}
          </div>

          {actions ? (
            <div className="flex items-center gap-2">
              {actions.map(
                ({ color, disabled, id, href, onClick, text, variant }, i) => {
                  const visualVariant = variant ?? actionsVariant;

                  return (
                    <Button
                      key={id}
                      type="button"
                      size="sm"
                      variant={getActionButtonVariant(visualVariant, color)}
                      disabled={disabled}
                      onClick={() => {
                        onClick?.();

                        if (href) {
                          window.location.assign(href);
                        }
                      }}
                      className={cn(i !== actions.length - 1 && "mr-1")}
                    >
                      {text}
                    </Button>
                  );
                },
              )}
            </div>
          ) : null}
        </div>

        {tabs ? (
          <Tabs
            value={selectedTabId}
            onValueChange={(value) => {
              const nextIndex = tabs.findIndex((tab) => tab.id === value);

              if (tabsMode === "panel" && nextIndex >= 0) {
                setSelectedTab(nextIndex);
              }
            }}
            className="py-2"
          >
            <TabsList className="mx-auto h-auto">
              {tabs.map(({ id, label, disabled }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  disabled={disabled}
                  className="px-2.5 py-1 text-sm data-active:font-semibold"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : null}
      </div>
    </section>
  );
}
