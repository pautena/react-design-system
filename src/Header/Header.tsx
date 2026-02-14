import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useTab } from "../TabProvider";
import { useGetDefaultThemeColor } from "../utils";
import type { HeaderPreset, HeaderProps } from "./Header.types";
import HeaderTitle, { HeaderSubtitle } from "./header-title";

/**
 * Section used to provide basic information about the page
 * and display main actions
 *
 * Supports extensive customization through slots and slotProps.
 * Each internal element (breadcrumbs, title, actions, tabs) can be
 * customized or replaced.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Header
 *   title="Dashboard"
 *   subtitle="Welcome back"
 *   breadcrumbs={[{id: '1', text: 'Home', link: '/'}]}
 *   actions={[{id: 'add', text: 'Add', onClick: handleAdd}]}
 * />
 *
 * // Custom breadcrumb separator
 * <Header
 *   title="Settings"
 *   breadcrumbs={breadcrumbs}
 *   slotProps={{
 *     breadcrumbs: { separator: '/' }
 *   }}
 * />
 *
 * // Custom action button styling
 * <Header
 *   title="Users"
 *   actions={actions}
 *   slotProps={{
 *     actionButton: { size: 'large', variant: 'contained' }
 *   }}
 * />
 * ```
 */
export function Header({
  title = "",
  loadingTitle,
  subtitle,
  loadingSubtitle,
  preset = "default",
  actionsVariant = "outlined",
  breadcrumbs,
  actions,
  tabs,
  tabsMode = "navigation",
  navigationButton,
  border = false,
  slots,
  slotProps,
}: HeaderProps) {
  const { palette } = useTheme();
  const defaultColor = useGetDefaultThemeColor();
  const [selectedTab, setSelectedTab] = useTab();

  // Slot components with defaults
  const RootComponent = slots?.root ?? Box;
  const ContainerComponent = slots?.container ?? Container;
  const ContentContainerComponent = slots?.contentContainer ?? Box;
  const TitleContainerComponent = slots?.titleContainer ?? Box;
  const NavigationButtonComponent = slots?.navigationButton ?? Button;
  const BreadcrumbsComponent = slots?.breadcrumbs ?? Breadcrumbs;
  const BreadcrumbLinkComponent = slots?.breadcrumbLink ?? Link;
  const TitleComponent = slots?.title ?? HeaderTitle;
  const SubtitleComponent = slots?.subtitle ?? HeaderSubtitle;
  const ActionsContainerComponent = slots?.actionsContainer ?? Box;
  const ActionButtonComponent = slots?.actionButton ?? Button;
  const TabsComponent = slots?.tabs ?? Tabs;
  const TabComponent = slots?.tab ?? Tab;

  const bgColorPresets: Record<HeaderPreset, string> = {
    default: defaultColor,
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    inherit: "inherit",
    transparent: "transparent",
    paper: palette.background.paper,
  };
  const bgColor = bgColorPresets[preset];
  const textColorPresets: Record<HeaderPreset, string> = {
    default: palette.getContrastText(bgColorPresets.default),
    primary: palette.primary.contrastText,
    secondary: palette.secondary.contrastText,
    inherit: "inherit",
    transparent: palette.text.primary,
    paper: palette.text.primary,
  };
  const textColor = textColorPresets[preset];

  const modedSelectedTab = selectedTab;

  return (
    <RootComponent
      bgcolor={bgColor}
      color={textColor}
      sx={border ? { borderBottom: 1, borderColor: "divider" } : undefined}
      {...slotProps?.root}
    >
      <ContainerComponent {...slotProps?.container}>
        <ContentContainerComponent
          sx={{
            py: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          {...slotProps?.contentContainer}
        >
          <TitleContainerComponent {...slotProps?.titleContainer}>
            {navigationButton && (
              <NavigationButtonComponent
                href={navigationButton.href}
                size="small"
                color="inherit"
                LinkComponent={Link}
                startIcon={navigationButton.icon}
                sx={{ mb: 1 }}
                {...slotProps?.navigationButton}
              >
                {navigationButton.text}
              </NavigationButtonComponent>
            )}
            {breadcrumbs?.length && (
              <BreadcrumbsComponent
                color="inherit"
                separator="›"
                aria-label="breadcrumb"
                sx={{ marginTop: 1 }}
                {...slotProps?.breadcrumbs}
              >
                {breadcrumbs.map(({ id, link, text }) => (
                  <BreadcrumbLinkComponent
                    key={id}
                    underline="hover"
                    color="inherit"
                    href={link}
                    variant="body2"
                    role="link"
                    {...slotProps?.breadcrumbLink}
                  >
                    {text}
                  </BreadcrumbLinkComponent>
                ))}
              </BreadcrumbsComponent>
            )}
            <TitleComponent loading={loadingTitle} {...slotProps?.title}>
              {title}
            </TitleComponent>
            {(subtitle || loadingSubtitle) && (
              <SubtitleComponent
                loading={loadingSubtitle}
                {...slotProps?.subtitle}
              >
                {subtitle}
              </SubtitleComponent>
            )}
          </TitleContainerComponent>
          {actions && (
            <ActionsContainerComponent
              display="flex"
              alignItems="center"
              {...slotProps?.actionsContainer}
            >
              {actions.map(
                ({ disabled, id, href, onClick, text, variant, color }, i) => (
                  <ActionButtonComponent
                    component={href ? Link : "button"}
                    role="button"
                    color={color ?? "inherit"}
                    disabled={disabled}
                    key={id}
                    variant={variant ?? actionsVariant}
                    size="small"
                    href={href}
                    onClick={onClick}
                    sx={{ mr: i !== actions.length - 1 ? 1 : 0 }}
                    {...slotProps?.actionButton}
                  >
                    {text}
                  </ActionButtonComponent>
                ),
              )}
            </ActionsContainerComponent>
          )}
        </ContentContainerComponent>
        {tabs && (
          <TabsComponent
            value={modedSelectedTab}
            textColor="inherit"
            onChange={
              tabsMode === "panel"
                ? (_, index) => setSelectedTab(index)
                : undefined
            }
            {...slotProps?.tabs}
          >
            {tabs.map(({ id, label, disabled, path, href }) => {
              const baseTabProps = { label, disabled };
              if (tabsMode === "panel") {
                return (
                  <TabComponent
                    key={id}
                    {...baseTabProps}
                    {...slotProps?.tab}
                  />
                );
              }
              return (
                <TabComponent
                  key={id}
                  {...baseTabProps}
                  component={Link}
                  // @ts-expect-error - href is valid when using component={Link}
                  href={href}
                  value={path}
                  {...slotProps?.tab}
                />
              );
            })}
          </TabsComponent>
        )}
      </ContainerComponent>
    </RootComponent>
  );
}

export default Header;
