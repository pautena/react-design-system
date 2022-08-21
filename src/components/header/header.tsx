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
import { useGetDefaultThemeColor } from "../../utils";
import { HeaderComponent, HeaderPreset, HeaderProps } from "./header.types";
import { useTab } from "~/providers";

/**
 * Section used to explain give basic information about the page
 * and put the main actions
 */
export const Header: HeaderComponent = ({
  title,
  subtitle,
  preset = "default",
  actionsVariant = "outlined",
  breadcrumbs,
  actions,
  tabs,
}: HeaderProps) => {
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
            onChange={(_, index) => setSelectedTab(index)}
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
