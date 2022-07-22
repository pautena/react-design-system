import React from "react";
import {
  Breadcrumbs,
  Typography,
  Container,
  useTheme,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { Link } from "../link";
import { PropTypes } from "@mui/material";
import { useGetDefaultThemeColor } from "../../utils";

export type HeaderPreset = PropTypes.Color | "transparent";
export type HeaderActionVariant = "text" | "outlined" | "contained";

export type HeaderAction = {
  id: string;
  text: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

export interface HeaderBreadcrumb {
  id: string;
  text: string;
  link: string;
}

export interface HeaderTab {
  id: string;
  label: string;
  disabled?: boolean;
}

export type HeaderProps = {
  /**
   * Title of the header
   */
  title: string;
  /**
   * Subtitle of the header
   */
  subtitle?: string;
  /**
   * Color palete used to render the component
   */
  preset: HeaderPreset;
  /**
   * List of breadcumbs to represent the path to reach
   * the page that we are
   */
  breadcrumbs?: HeaderBreadcrumb[];
  /**
   * List of actions that can be performed by the user.
   * Each action will be a button in the header.
   */
  actions?: HeaderAction[];
  /**
   * Variant used to render the actions
   */
  actionsVariant?: HeaderActionVariant;
  /**
   * If is set, a list of tabs is dispayed at the bottom
   */
  tabs?: HeaderTab[];
  /**
   * Tab that has to be marked as selected
   */
  selectedTab?: number;
  /**
   * Callback executed when the user click a tab
   */
  onChangeTab?: (tab: HeaderTab, index: number) => void;
};

/**
 * Section used to explain give basic information about the page
 * and put the main actions
 */
export const Header = ({
  title,
  subtitle,
  preset = "default",
  actionsVariant = "outlined",
  breadcrumbs,
  actions,
  tabs,
  selectedTab,
  onChangeTab = () => null,
}: HeaderProps) => {
  const { palette } = useTheme();
  const defaultColor = useGetDefaultThemeColor();

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

  return (
    <Box bgcolor={bgColor} color={textColor}>
      <Container>
        <Box sx={{ py: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Box>
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
            <Typography variant="h4" role="heading" aria-level={1}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body1" role="heading" aria-level={2}>
                {subtitle}
              </Typography>
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
                  sx={{ mr: i != actions.length - 1 ? 1 : 0 }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Box>
        {tabs && (
          <Tabs
            value={selectedTab}
            textColor="inherit"
            onChange={(_, index) => onChangeTab(tabs[index], index)}
          >
            {tabs.map(({ id, label, disabled }) => (
              <Tab key={id} label={label} disabled={disabled} />
            ))}
          </Tabs>
        )}
      </Container>
    </Box>
  );
};
