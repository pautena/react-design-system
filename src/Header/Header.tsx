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
 * Section used to explain give basic information about the page
 * and put the main actions
 */
export default function Header({
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
}: HeaderProps) {
  const { palette } = useTheme();
  const defaultColor = useGetDefaultThemeColor();
  const [selectedTab, setSelectedTab] = useTab();

  const bgColorPresets: Record<HeaderPreset, string> = {
    default: defaultColor,
    primary: palette.primary.main,
    secondary: palette.secondary.main,
    inherit: "inherit",
    transparent: "transparent",
  };
  const bgColor = bgColorPresets[preset];
  const textColorPresets: Record<HeaderPreset, string> = {
    default: palette.getContrastText(bgColorPresets.default),
    primary: palette.primary.contrastText,
    secondary: palette.secondary.contrastText,
    inherit: "inherit",
    transparent: palette.text.primary,
  };
  const textColor = textColorPresets[preset];

  const modedSelectedTab = selectedTab;

  return (
    <Box bgcolor={bgColor} color={textColor}>
      <Container>
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {navigationButton && (
              <Button
                href={navigationButton.href}
                size="small"
                color="inherit"
                LinkComponent={Link}
                startIcon={navigationButton.icon}
                sx={{ mb: 1 }}
              >
                {navigationButton.text}
              </Button>
            )}
            {breadcrumbs?.length && (
              <Breadcrumbs
                color="inherit"
                separator="›"
                aria-label="breadcrumb"
                sx={{ marginTop: 1 }}
              >
                {breadcrumbs.map(({ id, link, text }) => (
                  <Link
                    key={id}
                    underline="hover"
                    color="inherit"
                    href={link}
                    variant="body2"
                    role="link"
                  >
                    {text}
                  </Link>
                ))}
              </Breadcrumbs>
            )}
            <HeaderTitle loading={loadingTitle}>{title}</HeaderTitle>
            {(subtitle || loadingSubtitle) && (
              <HeaderSubtitle loading={loadingSubtitle}>
                {subtitle}
              </HeaderSubtitle>
            )}
          </Box>
          {actions && (
            <Box>
              {actions.map(({ disabled, id, href, onClick, text }, i) => (
                <Button
                  component={href ? Link : "button"}
                  role="button"
                  color="inherit"
                  disabled={disabled}
                  key={id}
                  variant={actionsVariant}
                  size="small"
                  href={href}
                  onClick={onClick}
                  sx={{ mr: i !== actions.length - 1 ? 1 : 0 }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Box>
        {tabs && (
          <Tabs
            value={modedSelectedTab}
            textColor="inherit"
            onChange={
              tabsMode === "panel"
                ? (_, index) => setSelectedTab(index)
                : undefined
            }
          >
            {tabs.map(({ id, label, disabled, path, href }) => {
              const tabProps = { label, disabled };
              if (tabsMode === "panel") {
                return <Tab key={id} {...tabProps} />;
              }
              return (
                <Tab
                  key={id}
                  {...tabProps}
                  component={Link}
                  href={href}
                  value={path}
                />
              );
            })}
          </Tabs>
        )}
      </Container>
    </Box>
  );
}
